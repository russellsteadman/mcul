import Alkyl from '../maps/alkyl';

const Isoalkyl = Alkyl.slice(2).map((alkyl) => (`iso${alkyl}`));
const Halide = ['fluoro', 'chloro', 'bromo', 'iodo'];

const Add = function (name, carbon, carbonTwo) {
    if (Alkyl.indexOf(name) !== -1) {
        // Add an alkyl group
        let plus = this.chainCarbons(Alkyl.indexOf(name) + 1);
        this.bond(plus[0], carbon);
        for (let i in plus) this.hydrogenateCarbon(plus[i]);
    } else if (Isoalkyl.indexOf(name) !== -1) {
        // Add an isoalkyl group
        let plus = this.chainCarbons(Alkyl.indexOf(name) + 1);
        let carbons = this.createAtoms('C', 2);
        this.bond(plus[plus.length - 1], carbons[0]).bond(plus[plus.length - 1], carbons[1]).bond(plus[0], carbon);
        for (let i in plus) this.hydrogenateCarbon(plus[i]);
        for (let i in carbons) this.hydrogenateCarbon(carbons[i]);
    } else if (name === 's-butyl' || name === 'sec-butyl') {
        // Add an s-butyl
        let plus = this.chainCarbons(3);
        let sub = this.createAtom('C');
        this.bond(plus[1], sub).bond(plus[0], carbon);
        for (let i in plus) this.hydrogenateCarbon(plus[i]);
        this.hydrogenateCarbon(sub);
    } else if (name === 't-butyl' || name === 'tert-butyl') {
        // Add an t-butyl
        let plus = this.chainCarbons(2);
        let carbons = this.createAtoms('C', 2);
        this.bond(plus[1], carbons[0]).bond(plus[1], carbons[1]).bond(plus[0], carbon);
        for (let i in plus) this.hydrogenateCarbon(plus[i]);
        for (let i in carbons) this.hydrogenateCarbon(carbons[i]);
    } else if (name === 'benzene') {
        // Add an benzene ring
        let plus = this.chainCarbons(6, 1);
        for (let i = 0; i < 6; i += 2) this.modifyBond(plus[i], plus[i + 1], {count: 2});
        this.bond(plus[0], plus[5]).bond(plus[0], carbon);
        for (let i in plus) this.hydrogenateCarbon(plus[i]);
    } else if (name === 'amine') {
        // Add an amine
        let n = this.createAtom('N');
        let h = this.createAtoms('H', 2);
        this.bond(carbon, n).bond(n, h[0]).bond(n, h[1]);
    } else if (Halide.indexOf(name) !== -1) {
        // Add a halide
        this.bond(this.createAtom(['F', 'Cl', 'Br', 'I'][Halide.indexOf(name)]), carbon);
    } else if (name === 'hydroxyl') {
        // Add an alcohol
        let o = this.createAtom('O');
        this.bond(o, this.createAtom('H')).bond(o, carbon);
    } else if (name === 'carbonyl') {
        // Add a ketone
        let o = this.createAtom('O');
        this.bond(o, carbon, {count: 2});
    } else if (name === 'aldehyde') {
        // Add a ketone
        let o = this.createAtom('O');
        this.bond(o, carbon, {count: 2});
        if (this.getBondCount(carbon) < 4) this.bond(carbon, this.createAtom('H'));
    } else if (name === 'carbonate') {
        // Add a carbonate
        if (!carbonTwo) throw new Error('Must provide a second R group for a carbonate');

        let o = this.createAtoms('O', 3);
        let c = this.createAtom('C');
        this.bond(o[0], c, {count: 2}).bond(o[1], c).bond(o[2], c);
        this.bond(carbon, o[1]).bond(carbonTwo, o[2]).bond(c, this.createAtom('H'));
        
    } else if (name === 'carboxylate') {
        let o = this.createAtoms('O', 2);
        o[0].charge = -1;
        this.bond(o[1], carbon, {count: 2}).bond(o[0], carbon);
    } else if (name === 'carboxyl') {
        let o = this.createAtoms('O', 2);
        o[0].charge = -1;
        this.bond(o[1], carbon, {count: 2}).bond(o[0], carbon);
    } else {
        throw new Error(`Unable to resolve functional group "${name}"`);
    }
};

export default Add;