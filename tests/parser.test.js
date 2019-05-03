const basic = require('./../src/parsers/basic');

test('adds 1 + 2 to equal 3', () => {
    expect(basic('H2S')).toBe(3);
});