/* global test expect */
const { Molecule, Atom } = require("../dist/mcul.node");

test("Can create methane", () => {
  let methane = new Molecule();

  let carbon = new Atom("C");
  let hydrogen = new Atom("H");

  let c1 = carbon.in(methane);

  let h1 = methane.contains(hydrogen);
  let h2 = hydrogen.in(methane);
  let h3 = methane.createAtom("H");
  let h4 = methane.contains(hydrogen);

  methane
    .bond(c1, h1)
    .bond(c1, h2)
    .bond(c1, h3)
    .bond(c1, h4);

  expect(methane.mass).toBe(16.043);

  expect(JSON.parse(methane.pack())).toMatchInlineSnapshot(`
    Object {
      "s": Object {
        "a": Object {
          "0": Object {
            "el": 6,
          },
          "1": Object {
            "el": 1,
          },
          "2": Object {
            "el": 1,
          },
          "3": Object {
            "el": 1,
          },
          "4": Object {
            "el": 1,
          },
        },
        "b": Object {
          "0-3": Object {
            "count": 1,
            "type": "c",
          },
          "0-4": Object {
            "count": 1,
            "type": "c",
          },
          "3-0": null,
          "4-0": null,
        },
        "i": 5,
      },
      "v": 1,
    }
  `);
});

test("Can branch a carbon chain", () => {
  let chain = new Molecule();

  let carbons = [];
  for (let i = 0; i < 15; i++) {
    carbons.push(chain.createAtom("C"));
  }

  for (let i = 0; i < 14; i++) {
    chain.bond(carbons[i], carbons[i + 1]);
  }

  let methyl = chain.createAtom("C");
  chain.bond(methyl, carbons[3]);

  let amine = new Molecule();
  let h1 = amine.createAtom("H");
  let h2 = amine.createAtom("H");
  let n = amine.createAtom("N");

  amine.bond(n, h1).bond(n, h2);

  let amine2 = amine.clone();

  amine.in(chain);

  chain.bond(chain.getAtomsByElement("N")[0], methyl);

  expect(chain.getBranchPaths(carbons[7])).toMatchInlineSnapshot(`
Array [
  "7-8-9-a-b-c-d-e",
  "7-6-5-4-3-f-i-h",
  "7-6-5-4-3-f-i-g",
  "7-6-5-4-3-2-1-0",
]
`);
});
