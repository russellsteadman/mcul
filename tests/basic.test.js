/* global test expect */
const Molecule = require("../src/mcul");

test("Hydrochloric acid", () => {
  expect(Molecule.createFromText("HCl", "basic").serialize())
    .toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "element": 1,
              "id": "1",
              "type": "element",
            },
            Object {
              "element": 17,
              "id": "2",
              "type": "element",
            },
          ],
          "fromText": "HCl",
          "idIndex": 2,
          "type": "molecule",
          "version": "0.1.0",
        }
    `);
});

test("Single Parenthetical Group", () => {
  expect(Molecule.createFromText("Al(NH)", "basic").serialize())
    .toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "element": 13,
              "id": "1",
              "type": "element",
            },
            Object {
              "children": Array [
                Object {
                  "element": 7,
                  "id": "2",
                  "type": "element",
                },
                Object {
                  "element": 1,
                  "id": "3",
                  "type": "element",
                },
              ],
              "id": "4",
              "type": "subgroup",
            },
          ],
          "fromText": "Al(NH)",
          "idIndex": 4,
          "type": "molecule",
          "version": "0.1.0",
        }
    `);
});

test("Layered Parentheses", () => {
  expect(Molecule.createFromText("Al(N(HCl))", "basic").serialize())
    .toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "element": 13,
              "id": "1",
              "type": "element",
            },
            Object {
              "children": Array [
                Object {
                  "element": 7,
                  "id": "2",
                  "type": "element",
                },
                Object {
                  "children": Array [
                    Object {
                      "element": 1,
                      "id": "3",
                      "type": "element",
                    },
                    Object {
                      "element": 17,
                      "id": "4",
                      "type": "element",
                    },
                  ],
                  "id": "5",
                  "type": "subgroup",
                },
              ],
              "id": "6",
              "type": "subgroup",
            },
          ],
          "fromText": "Al(N(HCl))",
          "idIndex": 6,
          "type": "molecule",
          "version": "0.1.0",
        }
    `);
});

test("Layered Parentheses With Atomic Counts", () => {
  expect(Molecule.createFromText("Al3(N2(HCl))", "basic").serialize())
    .toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "count": 3,
              "element": 13,
              "id": "1",
              "type": "element",
            },
            Object {
              "children": Array [
                Object {
                  "count": 2,
                  "element": 7,
                  "id": "2",
                  "type": "element",
                },
                Object {
                  "children": Array [
                    Object {
                      "element": 1,
                      "id": "3",
                      "type": "element",
                    },
                    Object {
                      "element": 17,
                      "id": "4",
                      "type": "element",
                    },
                  ],
                  "id": "5",
                  "type": "subgroup",
                },
              ],
              "id": "6",
              "type": "subgroup",
            },
          ],
          "fromText": "Al3(N2(HCl))",
          "idIndex": 6,
          "type": "molecule",
          "version": "0.1.0",
        }
    `);
});

test("Layered Parentheses With Charges", () => {
  expect(Molecule.createFromText("Al^+3(N^-2(HCl))", "basic").serialize())
    .toMatchInlineSnapshot(`
    Object {
      "children": Array [
        Object {
          "charge": 3,
          "element": 13,
          "id": "1",
          "type": "element",
        },
        Object {
          "children": Array [
            Object {
              "charge": -2,
              "element": 7,
              "id": "2",
              "type": "element",
            },
            Object {
              "children": Array [
                Object {
                  "element": 1,
                  "id": "3",
                  "type": "element",
                },
                Object {
                  "element": 17,
                  "id": "4",
                  "type": "element",
                },
              ],
              "id": "5",
              "type": "subgroup",
            },
          ],
          "id": "6",
          "type": "subgroup",
        },
      ],
      "fromText": "Al^+3(N^-2(HCl))",
      "idIndex": 6,
      "type": "molecule",
      "version": "0.1.0",
    }
  `);
});

test("Layered Parentheses With Atomic and Group Counts", () => {
  expect(Molecule.createFromText("Al3(N2(HCl)4)5", "basic").serialize())
    .toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "count": 3,
              "element": 13,
              "id": "1",
              "type": "element",
            },
            Object {
              "children": Array [
                Object {
                  "count": 2,
                  "element": 7,
                  "id": "2",
                  "type": "element",
                },
                Object {
                  "children": Array [
                    Object {
                      "element": 1,
                      "id": "3",
                      "type": "element",
                    },
                    Object {
                      "element": 17,
                      "id": "4",
                      "type": "element",
                    },
                  ],
                  "count": 4,
                  "id": "5",
                  "type": "subgroup",
                },
              ],
              "count": 5,
              "id": "6",
              "type": "subgroup",
            },
          ],
          "fromText": "Al3(N2(HCl)4)5",
          "idIndex": 6,
          "type": "molecule",
          "version": "0.1.0",
        }
    `);
});

test("Advanced Ligand Complex Without Charges", () => {
  expect(Molecule.createFromText("[Cu(NH3)6]_3(H2O)12", "basic").serialize())
    .toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "children": Array [
                Object {
                  "element": 29,
                  "id": "1",
                  "type": "element",
                },
                Object {
                  "children": Array [
                    Object {
                      "element": 7,
                      "id": "2",
                      "type": "element",
                    },
                    Object {
                      "count": 3,
                      "element": 1,
                      "id": "3",
                      "type": "element",
                    },
                  ],
                  "count": 6,
                  "id": "4",
                  "type": "subgroup",
                },
              ],
              "count": 3,
              "id": "5",
              "type": "complex",
            },
            Object {
              "children": Array [
                Object {
                  "count": 2,
                  "element": 1,
                  "id": "6",
                  "type": "element",
                },
                Object {
                  "element": 8,
                  "id": "7",
                  "type": "element",
                },
              ],
              "count": 12,
              "id": "8",
              "type": "subgroup",
            },
          ],
          "fromText": "[Cu(NH3)6]_3(H2O)12",
          "idIndex": 8,
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
          "children": Array [
            Object {
              "charge": 6,
              "children": Array [
                Object {
                  "element": 29,
                  "id": "1",
                  "type": "element",
                },
                Object {
                  "children": Array [
                    Object {
                      "element": 7,
                      "id": "2",
                      "type": "element",
                    },
                    Object {
                      "count": 3,
                      "element": 1,
                      "id": "3",
                      "type": "element",
                    },
                  ],
                  "count": 6,
                  "id": "4",
                  "type": "subgroup",
                },
              ],
              "count": 3,
              "id": "5",
              "type": "complex",
            },
            Object {
              "charge": 5,
              "children": Array [
                Object {
                  "count": 2,
                  "element": 1,
                  "id": "6",
                  "type": "element",
                },
                Object {
                  "element": 8,
                  "id": "7",
                  "type": "element",
                },
              ],
              "count": 12,
              "id": "8",
              "type": "subgroup",
            },
          ],
          "fromText": "[Cu(NH3)6]^+6_3(H2O)^+5_12",
          "idIndex": 8,
          "type": "molecule",
          "version": "0.1.0",
        }
    `);
});

test("Advanced Ligand Complex With Implicit Counts", () => {
  expect(
    Molecule.createFromText("[Cu(NH3)6]3^+6(H2O)12^+5", "basic").serialize()
  ).toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "charge": 6,
              "children": Array [
                Object {
                  "element": 29,
                  "id": "1",
                  "type": "element",
                },
                Object {
                  "children": Array [
                    Object {
                      "element": 7,
                      "id": "2",
                      "type": "element",
                    },
                    Object {
                      "count": 3,
                      "element": 1,
                      "id": "3",
                      "type": "element",
                    },
                  ],
                  "count": 6,
                  "id": "4",
                  "type": "subgroup",
                },
              ],
              "count": 3,
              "id": "5",
              "type": "complex",
            },
            Object {
              "charge": 5,
              "children": Array [
                Object {
                  "count": 2,
                  "element": 1,
                  "id": "6",
                  "type": "element",
                },
                Object {
                  "element": 8,
                  "id": "7",
                  "type": "element",
                },
              ],
              "count": 12,
              "id": "8",
              "type": "subgroup",
            },
          ],
          "fromText": "[Cu(NH3)6]3^+6(H2O)12^+5",
          "idIndex": 8,
          "type": "molecule",
          "version": "0.1.0",
        }
    `);
});
