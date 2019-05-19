/* global test expect */
const Molecule = require("../src/mcul");

test("Hydrochloric acid", () => {
  expect(Molecule.createFromText("HCl", "basic").serialize())
    .toMatchInlineSnapshot(`
    Object {
      "fromText": "HCl",
      "members": Array [
        Object {
          "element": 1,
          "type": "element",
        },
        Object {
          "element": 17,
          "type": "element",
        },
      ],
      "type": "molecule",
      "version": "0.1.0",
    }
  `);
});

test("Ligand Complex", () => {
  expect(Molecule.createFromText("Al(NH)", "basic").serialize())
    .toMatchInlineSnapshot(`
    Object {
      "fromText": "Al(NH)",
      "members": Array [
        Object {
          "element": 13,
          "type": "element",
        },
        Object {
          "members": Array [
            Object {
              "element": 7,
              "type": "element",
            },
            Object {
              "element": 1,
              "type": "element",
            },
          ],
          "type": "subgroup",
        },
      ],
      "type": "molecule",
      "version": "0.1.0",
    }
  `);
});

test("Layered Parentheses", () => {
  expect(Molecule.createFromText("Al(N(HCl))", "basic").serialize())
    .toMatchInlineSnapshot(`
    Object {
      "fromText": "Al(N(HCl))",
      "members": Array [
        Object {
          "element": 13,
          "type": "element",
        },
        Object {
          "members": Array [
            Object {
              "element": 7,
              "type": "element",
            },
            Object {
              "members": Array [
                Object {
                  "element": 1,
                  "type": "element",
                },
                Object {
                  "element": 17,
                  "type": "element",
                },
              ],
              "type": "subgroup",
            },
          ],
          "type": "subgroup",
        },
      ],
      "type": "molecule",
      "version": "0.1.0",
    }
  `);
});

test("Layered Parentheses With Atomic Counts", () => {
  expect(Molecule.createFromText("Al3(N2(HCl))", "basic").serialize())
    .toMatchInlineSnapshot(`
    Object {
      "fromText": "Al3(N2(HCl))",
      "members": Array [
        Object {
          "count": 3,
          "element": 13,
          "type": "element",
        },
        Object {
          "members": Array [
            Object {
              "count": 2,
              "element": 7,
              "type": "element",
            },
            Object {
              "members": Array [
                Object {
                  "element": 1,
                  "type": "element",
                },
                Object {
                  "element": 17,
                  "type": "element",
                },
              ],
              "type": "subgroup",
            },
          ],
          "type": "subgroup",
        },
      ],
      "type": "molecule",
      "version": "0.1.0",
    }
  `);
});

test("Layered Parentheses With Atomic and Group Counts", () => {
  expect(Molecule.createFromText("Al3(N2(HCl)4)5", "basic").serialize())
    .toMatchInlineSnapshot(`
    Object {
      "fromText": "Al3(N2(HCl)4)5",
      "members": Array [
        Object {
          "count": 3,
          "element": 13,
          "type": "element",
        },
        Object {
          "count": 5,
          "members": Array [
            Object {
              "count": 2,
              "element": 7,
              "type": "element",
            },
            Object {
              "count": 4,
              "members": Array [
                Object {
                  "element": 1,
                  "type": "element",
                },
                Object {
                  "element": 17,
                  "type": "element",
                },
              ],
              "type": "subgroup",
            },
          ],
          "type": "subgroup",
        },
      ],
      "type": "molecule",
      "version": "0.1.0",
    }
  `);
});

test("Advanced Ligand Complex Without Charges", () => {
  expect(Molecule.createFromText("[Cu(NH3)6]_3(H2O)12", "basic").serialize())
    .toMatchInlineSnapshot(`
    Object {
      "fromText": "[Cu(NH3)6]_3(H2O)12",
      "members": Array [
        Object {
          "count": 3,
          "members": Array [
            Object {
              "element": 29,
              "type": "element",
            },
            Object {
              "count": 6,
              "members": Array [
                Object {
                  "element": 7,
                  "type": "element",
                },
                Object {
                  "count": 3,
                  "element": 1,
                  "type": "element",
                },
              ],
              "type": "subgroup",
            },
          ],
          "type": "complex",
        },
        Object {
          "count": 12,
          "members": Array [
            Object {
              "count": 2,
              "element": 1,
              "type": "element",
            },
            Object {
              "element": 8,
              "type": "element",
            },
          ],
          "type": "subgroup",
        },
      ],
      "type": "molecule",
      "version": "0.1.0",
    }
  `);
});

test("Advanced Ligand Complex With Charges", () => {
  expect(
    Molecule.createFromText("[Cu(NH3)6]^+6_3(H2O)^+5_12", "basic").serialize()
  ).toMatchInlineSnapshot(`
    Object {
      "fromText": "[Cu(NH3)6]^+6_3(H2O)^+5_12",
      "members": Array [
        Object {
          "charge": 6,
          "count": 3,
          "members": Array [
            Object {
              "element": 29,
              "type": "element",
            },
            Object {
              "count": 6,
              "members": Array [
                Object {
                  "element": 7,
                  "type": "element",
                },
                Object {
                  "count": 3,
                  "element": 1,
                  "type": "element",
                },
              ],
              "type": "subgroup",
            },
          ],
          "type": "complex",
        },
        Object {
          "charge": 5,
          "count": 12,
          "members": Array [
            Object {
              "count": 2,
              "element": 1,
              "type": "element",
            },
            Object {
              "element": 8,
              "type": "element",
            },
          ],
          "type": "subgroup",
        },
      ],
      "type": "molecule",
      "version": "0.1.0",
    }
  `);
});
