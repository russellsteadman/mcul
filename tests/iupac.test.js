/* global test expect */
const Molecule = require("../src/mcul");

test("Butane", () => {
  expect(Molecule.createFromText("butane", "iupac").serialize())
    .toMatchInlineSnapshot(`
                Object {
                  "bonds": Object {
                    "1-2": "2-1",
                    "1-6": Object {
                      "bondCount": 1,
                    },
                    "1-7": Object {
                      "bondCount": 1,
                    },
                    "1-8": Object {
                      "bondCount": 1,
                    },
                    "2-1": Object {
                      "bondCount": 1,
                    },
                    "2-3": "3-2",
                    "2-9": Object {
                      "bondCount": 1,
                    },
                    "2-a": Object {
                      "bondCount": 1,
                    },
                    "3-2": Object {
                      "bondCount": 1,
                    },
                    "3-4": "4-3",
                    "3-b": Object {
                      "bondCount": 1,
                    },
                    "3-c": Object {
                      "bondCount": 1,
                    },
                    "4-3": Object {
                      "bondCount": 1,
                    },
                    "4-d": Object {
                      "bondCount": 1,
                    },
                    "4-e": Object {
                      "bondCount": 1,
                    },
                    "4-f": Object {
                      "bondCount": 1,
                    },
                    "6-1": "1-6",
                    "7-1": "1-7",
                    "8-1": "1-8",
                    "9-2": "2-9",
                    "a-2": "2-a",
                    "b-3": "3-b",
                    "c-3": "3-c",
                    "d-4": "4-d",
                    "e-4": "4-e",
                    "f-4": "4-f",
                  },
                  "children": Array [
                    Object {
                      "bondCount": 1,
                      "children": Array [
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "1",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "2",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "3",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "4",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "6",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "7",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "8",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "9",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "a",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "b",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "c",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "d",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "e",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "f",
                          "type": "element",
                        },
                      ],
                      "id": "5",
                      "location": Array [],
                      "prefix": 4,
                      "type": "chain",
                    },
                  ],
                  "fromText": "butane",
                  "idIndex": 15,
                  "type": "molecule",
                  "version": "0.1.0",
                }
        `);
});

test("Butene", () => {
  expect(Molecule.createFromText("but-2-ene", "iupac").serialize())
    .toMatchInlineSnapshot(`
                Object {
                  "bonds": Object {
                    "1-2": "2-1",
                    "1-6": Object {
                      "bondCount": 1,
                    },
                    "1-7": Object {
                      "bondCount": 1,
                    },
                    "1-8": Object {
                      "bondCount": 1,
                    },
                    "2-1": Object {
                      "bondCount": 1,
                    },
                    "2-3": "3-2",
                    "2-9": Object {
                      "bondCount": 1,
                    },
                    "3-2": Object {
                      "bondCount": 2,
                    },
                    "3-4": "4-3",
                    "3-a": Object {
                      "bondCount": 1,
                    },
                    "4-3": Object {
                      "bondCount": 1,
                    },
                    "4-b": Object {
                      "bondCount": 1,
                    },
                    "4-c": Object {
                      "bondCount": 1,
                    },
                    "4-d": Object {
                      "bondCount": 1,
                    },
                    "6-1": "1-6",
                    "7-1": "1-7",
                    "8-1": "1-8",
                    "9-2": "2-9",
                    "a-3": "3-a",
                    "b-4": "4-b",
                    "c-4": "4-c",
                    "d-4": "4-d",
                  },
                  "children": Array [
                    Object {
                      "bondCount": 2,
                      "children": Array [
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "1",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "2",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "3",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "4",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "6",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "7",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "8",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "9",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "a",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "b",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "c",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "d",
                          "type": "element",
                        },
                      ],
                      "id": "5",
                      "location": Array [
                        2,
                      ],
                      "prefix": 4,
                      "type": "chain",
                    },
                  ],
                  "fromText": "but-2-ene",
                  "idIndex": 13,
                  "type": "molecule",
                  "version": "0.1.0",
                }
        `);
});

test("Butyne Different Location", () => {
  expect(Molecule.createFromText("but-2,3-yne", "iupac").serialize())
    .toMatchInlineSnapshot(`
                Object {
                  "bonds": Object {
                    "1-2": "2-1",
                    "1-6": Object {
                      "bondCount": 1,
                    },
                    "1-7": Object {
                      "bondCount": 1,
                    },
                    "1-8": Object {
                      "bondCount": 1,
                    },
                    "2-1": Object {
                      "bondCount": 1,
                    },
                    "2-3": "3-2",
                    "3-2": Object {
                      "bondCount": 3,
                    },
                    "3-4": "4-3",
                    "4-3": Object {
                      "bondCount": 3,
                    },
                    "4-9": Object {
                      "bondCount": 1,
                    },
                    "6-1": "1-6",
                    "7-1": "1-7",
                    "8-1": "1-8",
                    "9-4": "4-9",
                  },
                  "children": Array [
                    Object {
                      "bondCount": 3,
                      "children": Array [
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "1",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "2",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "3",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "4",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "6",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "7",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "8",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "9",
                          "type": "element",
                        },
                      ],
                      "id": "5",
                      "location": Array [
                        2,
                        3,
                      ],
                      "prefix": 4,
                      "type": "chain",
                    },
                  ],
                  "fromText": "but-2,3-yne",
                  "idIndex": 9,
                  "type": "molecule",
                  "version": "0.1.0",
                }
        `);
});

test("Butyne Same Location", () => {
  expect(Molecule.createFromText("but-2,2-yne", "iupac").serialize())
    .toMatchInlineSnapshot(`
                Object {
                  "bonds": Object {
                    "1-2": "2-1",
                    "1-6": Object {
                      "bondCount": 1,
                    },
                    "1-7": Object {
                      "bondCount": 1,
                    },
                    "1-8": Object {
                      "bondCount": 1,
                    },
                    "2-1": Object {
                      "bondCount": 1,
                    },
                    "2-3": "3-2",
                    "3-2": Object {
                      "bondCount": 3,
                    },
                    "3-4": "4-3",
                    "4-3": Object {
                      "bondCount": 1,
                    },
                    "4-9": Object {
                      "bondCount": 1,
                    },
                    "4-a": Object {
                      "bondCount": 1,
                    },
                    "4-b": Object {
                      "bondCount": 1,
                    },
                    "6-1": "1-6",
                    "7-1": "1-7",
                    "8-1": "1-8",
                    "9-4": "4-9",
                    "a-4": "4-a",
                    "b-4": "4-b",
                  },
                  "children": Array [
                    Object {
                      "bondCount": 3,
                      "children": Array [
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "1",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "2",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "3",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "4",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "6",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "7",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "8",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "9",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "a",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "b",
                          "type": "element",
                        },
                      ],
                      "id": "5",
                      "location": Array [
                        2,
                        2,
                      ],
                      "prefix": 4,
                      "type": "chain",
                    },
                  ],
                  "fromText": "but-2,2-yne",
                  "idIndex": 11,
                  "type": "molecule",
                  "version": "0.1.0",
                }
        `);
});

test("Butyne Same Location, Extra Comma", () => {
  expect(Molecule.createFromText("but-2,2,-yne", "iupac").serialize())
    .toMatchInlineSnapshot(`
                Object {
                  "bonds": Object {
                    "1-2": "2-1",
                    "1-6": Object {
                      "bondCount": 1,
                    },
                    "1-7": Object {
                      "bondCount": 1,
                    },
                    "1-8": Object {
                      "bondCount": 1,
                    },
                    "2-1": Object {
                      "bondCount": 1,
                    },
                    "2-3": "3-2",
                    "3-2": Object {
                      "bondCount": 3,
                    },
                    "3-4": "4-3",
                    "4-3": Object {
                      "bondCount": 1,
                    },
                    "4-9": Object {
                      "bondCount": 1,
                    },
                    "4-a": Object {
                      "bondCount": 1,
                    },
                    "4-b": Object {
                      "bondCount": 1,
                    },
                    "6-1": "1-6",
                    "7-1": "1-7",
                    "8-1": "1-8",
                    "9-4": "4-9",
                    "a-4": "4-a",
                    "b-4": "4-b",
                  },
                  "children": Array [
                    Object {
                      "bondCount": 3,
                      "children": Array [
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "1",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "2",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "3",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "4",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "6",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "7",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "8",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "9",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "a",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "b",
                          "type": "element",
                        },
                      ],
                      "id": "5",
                      "location": Array [
                        2,
                        2,
                      ],
                      "prefix": 4,
                      "type": "chain",
                    },
                  ],
                  "fromText": "but-2,2,-yne",
                  "idIndex": 11,
                  "type": "molecule",
                  "version": "0.1.0",
                }
        `);
});

test("Cyclobutane", () => {
  expect(Molecule.createFromText("cyclobutane", "iupac").serialize())
    .toMatchInlineSnapshot(`
                Object {
                  "bonds": Object {
                    "1-2": "2-1",
                    "1-6": Object {
                      "bondCount": 1,
                    },
                    "1-7": Object {
                      "bondCount": 1,
                    },
                    "1-8": Object {
                      "bondCount": 1,
                    },
                    "2-1": Object {
                      "bondCount": 1,
                    },
                    "2-3": "3-2",
                    "2-9": Object {
                      "bondCount": 1,
                    },
                    "2-a": Object {
                      "bondCount": 1,
                    },
                    "3-2": Object {
                      "bondCount": 1,
                    },
                    "3-4": "4-3",
                    "3-b": Object {
                      "bondCount": 1,
                    },
                    "3-c": Object {
                      "bondCount": 1,
                    },
                    "4-3": Object {
                      "bondCount": 1,
                    },
                    "4-d": Object {
                      "bondCount": 1,
                    },
                    "4-e": Object {
                      "bondCount": 1,
                    },
                    "4-f": Object {
                      "bondCount": 1,
                    },
                    "6-1": "1-6",
                    "7-1": "1-7",
                    "8-1": "1-8",
                    "9-2": "2-9",
                    "a-2": "2-a",
                    "b-3": "3-b",
                    "c-3": "3-c",
                    "d-4": "4-d",
                    "e-4": "4-e",
                    "f-4": "4-f",
                  },
                  "children": Array [
                    Object {
                      "bondCount": 1,
                      "children": Array [
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "1",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "2",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "3",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "4",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "6",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "7",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "8",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "9",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "a",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "b",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "c",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "d",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "e",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "f",
                          "type": "element",
                        },
                      ],
                      "cyclic": true,
                      "id": "5",
                      "location": Array [],
                      "prefix": 4,
                      "type": "chain",
                    },
                  ],
                  "fromText": "cyclobutane",
                  "idIndex": 15,
                  "type": "molecule",
                  "version": "0.1.0",
                }
        `);
});

test("trichloromethane", () => {
  expect(Molecule.createFromText("trichloromethane", "iupac").serialize())
    .toMatchInlineSnapshot(`
        Object {
          "bonds": Object {
            "1-3": Object {
              "bondCount": 1,
            },
            "1-5": Object {
              "bondCount": 1,
            },
            "1-7": Object {
              "bondCount": 1,
            },
            "1-9": Object {
              "bondCount": 1,
            },
            "3-1": "1-3",
            "5-1": "1-5",
            "7-1": "1-7",
            "9-1": "1-9",
          },
          "children": Array [
            Object {
              "bondCount": 1,
              "children": Array [
                Object {
                  "chain": true,
                  "element": 6,
                  "id": "1",
                  "type": "element",
                },
                Object {
                  "children": Array [
                    Object {
                      "element": 17,
                      "id": "3",
                      "type": "element",
                    },
                  ],
                  "fn": "chloro",
                  "id": "2",
                  "type": "fngroup",
                },
                Object {
                  "children": Array [
                    Object {
                      "element": 17,
                      "id": "5",
                      "type": "element",
                    },
                  ],
                  "fn": "chloro",
                  "id": "4",
                  "type": "fngroup",
                },
                Object {
                  "children": Array [
                    Object {
                      "element": 17,
                      "id": "7",
                      "type": "element",
                    },
                  ],
                  "fn": "chloro",
                  "id": "6",
                  "type": "fngroup",
                },
                Object {
                  "element": 1,
                  "id": "9",
                  "type": "element",
                },
              ],
              "id": "8",
              "location": Array [],
              "prefix": 1,
              "type": "chain",
            },
          ],
          "fromText": "trichloromethane",
          "idIndex": 9,
          "type": "molecule",
          "version": "0.1.0",
        }
    `);
});

test("trichloroethene", () => {
  expect(Molecule.createFromText("trichloroethene", "iupac").serialize())
    .toMatchInlineSnapshot(`
    Object {
      "bonds": Object {
        "1-2": "2-1",
        "1-4": Object {
          "bondCount": 1,
        },
        "1-6": Object {
          "bondCount": 1,
        },
        "2-1": Object {
          "bondCount": 2,
        },
        "2-8": Object {
          "bondCount": 1,
        },
        "2-a": Object {
          "bondCount": 1,
        },
        "4-1": "1-4",
        "6-1": "1-6",
        "8-2": "2-8",
        "a-2": "2-a",
      },
      "children": Array [
        Object {
          "bondCount": 2,
          "children": Array [
            Object {
              "chain": true,
              "element": 6,
              "id": "1",
              "type": "element",
            },
            Object {
              "chain": true,
              "element": 6,
              "id": "2",
              "type": "element",
            },
            Object {
              "children": Array [
                Object {
                  "element": 17,
                  "id": "4",
                  "type": "element",
                },
              ],
              "fn": "chloro",
              "id": "3",
              "type": "fngroup",
            },
            Object {
              "children": Array [
                Object {
                  "element": 17,
                  "id": "6",
                  "type": "element",
                },
              ],
              "fn": "chloro",
              "id": "5",
              "type": "fngroup",
            },
            Object {
              "children": Array [
                Object {
                  "element": 17,
                  "id": "8",
                  "type": "element",
                },
              ],
              "fn": "chloro",
              "id": "7",
              "type": "fngroup",
            },
            Object {
              "element": 1,
              "id": "a",
              "type": "element",
            },
          ],
          "id": "9",
          "location": Array [
            1,
          ],
          "prefix": 2,
          "type": "chain",
        },
      ],
      "fromText": "trichloroethene",
      "idIndex": 10,
      "type": "molecule",
      "version": "0.1.0",
    }
  `);
});

test("trifluoroethane", () => {
  expect(Molecule.createFromText("trifluoroethane", "iupac").serialize())
    .toMatchInlineSnapshot(`
                Object {
                  "bonds": Object {
                    "1-2": "2-1",
                    "1-4": Object {
                      "bondCount": 1,
                    },
                    "1-6": Object {
                      "bondCount": 1,
                    },
                    "1-8": Object {
                      "bondCount": 1,
                    },
                    "2-1": Object {
                      "bondCount": 1,
                    },
                    "2-a": Object {
                      "bondCount": 1,
                    },
                    "2-b": Object {
                      "bondCount": 1,
                    },
                    "2-c": Object {
                      "bondCount": 1,
                    },
                    "4-1": "1-4",
                    "6-1": "1-6",
                    "8-1": "1-8",
                    "a-2": "2-a",
                    "b-2": "2-b",
                    "c-2": "2-c",
                  },
                  "children": Array [
                    Object {
                      "bondCount": 1,
                      "children": Array [
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "1",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "2",
                          "type": "element",
                        },
                        Object {
                          "children": Array [
                            Object {
                              "element": 9,
                              "id": "4",
                              "type": "element",
                            },
                          ],
                          "fn": "fluoro",
                          "id": "3",
                          "type": "fngroup",
                        },
                        Object {
                          "children": Array [
                            Object {
                              "element": 9,
                              "id": "6",
                              "type": "element",
                            },
                          ],
                          "fn": "fluoro",
                          "id": "5",
                          "type": "fngroup",
                        },
                        Object {
                          "children": Array [
                            Object {
                              "element": 9,
                              "id": "8",
                              "type": "element",
                            },
                          ],
                          "fn": "fluoro",
                          "id": "7",
                          "type": "fngroup",
                        },
                        Object {
                          "element": 1,
                          "id": "a",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "b",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "c",
                          "type": "element",
                        },
                      ],
                      "id": "9",
                      "location": Array [],
                      "prefix": 2,
                      "type": "chain",
                    },
                  ],
                  "fromText": "trifluoroethane",
                  "idIndex": 12,
                  "type": "molecule",
                  "version": "0.1.0",
                }
        `);
});

test("1,1,1,-trifluoroethane", () => {
  expect(Molecule.createFromText("1,1,1,-trifluoroethane", "iupac").serialize())
    .toMatchInlineSnapshot(`
                Object {
                  "bonds": Object {
                    "1-2": "2-1",
                    "1-4": Object {
                      "bondCount": 1,
                    },
                    "1-6": Object {
                      "bondCount": 1,
                    },
                    "1-8": Object {
                      "bondCount": 1,
                    },
                    "2-1": Object {
                      "bondCount": 1,
                    },
                    "2-a": Object {
                      "bondCount": 1,
                    },
                    "2-b": Object {
                      "bondCount": 1,
                    },
                    "2-c": Object {
                      "bondCount": 1,
                    },
                    "4-1": "1-4",
                    "6-1": "1-6",
                    "8-1": "1-8",
                    "a-2": "2-a",
                    "b-2": "2-b",
                    "c-2": "2-c",
                  },
                  "children": Array [
                    Object {
                      "bondCount": 1,
                      "children": Array [
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "1",
                          "type": "element",
                        },
                        Object {
                          "chain": true,
                          "element": 6,
                          "id": "2",
                          "type": "element",
                        },
                        Object {
                          "children": Array [
                            Object {
                              "element": 9,
                              "id": "4",
                              "type": "element",
                            },
                          ],
                          "fn": "fluoro",
                          "id": "3",
                          "type": "fngroup",
                        },
                        Object {
                          "children": Array [
                            Object {
                              "element": 9,
                              "id": "6",
                              "type": "element",
                            },
                          ],
                          "fn": "fluoro",
                          "id": "5",
                          "type": "fngroup",
                        },
                        Object {
                          "children": Array [
                            Object {
                              "element": 9,
                              "id": "8",
                              "type": "element",
                            },
                          ],
                          "fn": "fluoro",
                          "id": "7",
                          "type": "fngroup",
                        },
                        Object {
                          "element": 1,
                          "id": "a",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "b",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "c",
                          "type": "element",
                        },
                      ],
                      "id": "9",
                      "location": Array [],
                      "prefix": 2,
                      "type": "chain",
                    },
                  ],
                  "fromText": "1,1,1,-trifluoroethane",
                  "idIndex": 12,
                  "type": "molecule",
                  "version": "0.1.0",
                }
        `);
});

test("2-bromo-2-chloro-1,1,1,-trifluoroethane", () => {
  expect(
    Molecule.createFromText(
      "2-bromo-2-chloro-1,1,1,-trifluoroethane",
      "iupac"
    ).serialize()
  ).toMatchInlineSnapshot(`
            Object {
              "bonds": Object {
                "1-2": "2-1",
                "1-8": Object {
                  "bondCount": 1,
                },
                "1-a": Object {
                  "bondCount": 1,
                },
                "1-c": Object {
                  "bondCount": 1,
                },
                "2-1": Object {
                  "bondCount": 1,
                },
                "2-4": Object {
                  "bondCount": 1,
                },
                "2-6": Object {
                  "bondCount": 1,
                },
                "2-e": Object {
                  "bondCount": 1,
                },
                "4-2": "2-4",
                "6-2": "2-6",
                "8-1": "1-8",
                "a-1": "1-a",
                "c-1": "1-c",
                "e-2": "2-e",
              },
              "children": Array [
                Object {
                  "bondCount": 1,
                  "children": Array [
                    Object {
                      "chain": true,
                      "element": 6,
                      "id": "1",
                      "type": "element",
                    },
                    Object {
                      "chain": true,
                      "element": 6,
                      "id": "2",
                      "type": "element",
                    },
                    Object {
                      "children": Array [
                        Object {
                          "element": 35,
                          "id": "4",
                          "type": "element",
                        },
                      ],
                      "fn": "bromo",
                      "id": "3",
                      "type": "fngroup",
                    },
                    Object {
                      "children": Array [
                        Object {
                          "element": 17,
                          "id": "6",
                          "type": "element",
                        },
                      ],
                      "fn": "chloro",
                      "id": "5",
                      "type": "fngroup",
                    },
                    Object {
                      "children": Array [
                        Object {
                          "element": 9,
                          "id": "8",
                          "type": "element",
                        },
                      ],
                      "fn": "fluoro",
                      "id": "7",
                      "type": "fngroup",
                    },
                    Object {
                      "children": Array [
                        Object {
                          "element": 9,
                          "id": "a",
                          "type": "element",
                        },
                      ],
                      "fn": "fluoro",
                      "id": "9",
                      "type": "fngroup",
                    },
                    Object {
                      "children": Array [
                        Object {
                          "element": 9,
                          "id": "c",
                          "type": "element",
                        },
                      ],
                      "fn": "fluoro",
                      "id": "b",
                      "type": "fngroup",
                    },
                    Object {
                      "element": 1,
                      "id": "e",
                      "type": "element",
                    },
                  ],
                  "id": "d",
                  "location": Array [],
                  "prefix": 2,
                  "type": "chain",
                },
              ],
              "fromText": "2-bromo-2-chloro-1,1,1,-trifluoroethane",
              "idIndex": 14,
              "type": "molecule",
              "version": "0.1.0",
            }
      `);
});

test("propan-1,2-diol", () => {
  expect(Molecule.createFromText("propan-1,2-diol", "iupac").serialize())
    .toMatchInlineSnapshot(`
            Object {
              "bonds": Object {
                "1-2": "2-1",
                "1-5": Object {
                  "bondCount": 1,
                },
                "1-6": Object {
                  "bondCount": 1,
                },
                "1-b": Object {
                  "bondCount": 1,
                },
                "2-1": Object {
                  "bondCount": 1,
                },
                "2-3": "3-2",
                "2-8": Object {
                  "bondCount": 1,
                },
                "2-9": Object {
                  "bondCount": 1,
                },
                "3-2": Object {
                  "bondCount": 1,
                },
                "3-c": Object {
                  "bondCount": 1,
                },
                "3-d": Object {
                  "bondCount": 1,
                },
                "3-e": Object {
                  "bondCount": 1,
                },
                "5-1": "1-5",
                "6-1": "1-6",
                "8-2": "2-8",
                "9-2": "2-9",
                "b-1": "1-b",
                "c-3": "3-c",
                "d-3": "3-d",
                "e-3": "3-e",
              },
              "children": Array [
                Object {
                  "bondCount": 1,
                  "children": Array [
                    Object {
                      "chain": true,
                      "element": 6,
                      "id": "1",
                      "type": "element",
                    },
                    Object {
                      "chain": true,
                      "element": 6,
                      "id": "2",
                      "type": "element",
                    },
                    Object {
                      "chain": true,
                      "element": 6,
                      "id": "3",
                      "type": "element",
                    },
                    Object {
                      "children": Array [
                        Object {
                          "element": 8,
                          "id": "5",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "6",
                          "type": "element",
                        },
                      ],
                      "fn": "ol",
                      "id": "4",
                      "type": "fngroup",
                    },
                    Object {
                      "children": Array [
                        Object {
                          "element": 8,
                          "id": "8",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "9",
                          "type": "element",
                        },
                      ],
                      "fn": "ol",
                      "id": "7",
                      "type": "fngroup",
                    },
                    Object {
                      "element": 1,
                      "id": "b",
                      "type": "element",
                    },
                    Object {
                      "element": 1,
                      "id": "c",
                      "type": "element",
                    },
                    Object {
                      "element": 1,
                      "id": "d",
                      "type": "element",
                    },
                    Object {
                      "element": 1,
                      "id": "e",
                      "type": "element",
                    },
                  ],
                  "id": "a",
                  "location": Array [],
                  "prefix": 3,
                  "type": "chain",
                },
              ],
              "fromText": "propan-1,2-diol",
              "idIndex": 14,
              "type": "molecule",
              "version": "0.1.0",
            }
      `);
});

test("3,4-dimethyl-1-pentene", () => {
  expect(Molecule.createFromText("3,4-dimethyl-1-pentene", "iupac").serialize())
    .toMatchInlineSnapshot(`
            Object {
              "bonds": Object {
                "1-2": "2-1",
                "1-b": Object {
                  "bondCount": 1,
                },
                "1-c": Object {
                  "bondCount": 1,
                },
                "2-1": Object {
                  "bondCount": 2,
                },
                "2-3": "3-2",
                "2-d": Object {
                  "bondCount": 1,
                },
                "3-2": Object {
                  "bondCount": 1,
                },
                "3-4": "4-3",
                "3-7": Object {
                  "bondCount": 1,
                },
                "3-e": Object {
                  "bondCount": 1,
                },
                "4-3": Object {
                  "bondCount": 1,
                },
                "4-5": "5-4",
                "4-9": Object {
                  "bondCount": 1,
                },
                "4-f": Object {
                  "bondCount": 1,
                },
                "5-4": Object {
                  "bondCount": 1,
                },
                "5-g": Object {
                  "bondCount": 1,
                },
                "5-h": Object {
                  "bondCount": 1,
                },
                "5-i": Object {
                  "bondCount": 1,
                },
                "7-3": "3-7",
                "7-j": Object {
                  "bondCount": 1,
                },
                "7-k": Object {
                  "bondCount": 1,
                },
                "7-l": Object {
                  "bondCount": 1,
                },
                "9-4": "4-9",
                "9-m": Object {
                  "bondCount": 1,
                },
                "9-n": Object {
                  "bondCount": 1,
                },
                "9-o": Object {
                  "bondCount": 1,
                },
                "b-1": "1-b",
                "c-1": "1-c",
                "d-2": "2-d",
                "e-3": "3-e",
                "f-4": "4-f",
                "g-5": "5-g",
                "h-5": "5-h",
                "i-5": "5-i",
                "j-7": "7-j",
                "k-7": "7-k",
                "l-7": "7-l",
                "m-9": "9-m",
                "n-9": "9-n",
                "o-9": "9-o",
              },
              "children": Array [
                Object {
                  "bondCount": 2,
                  "children": Array [
                    Object {
                      "chain": true,
                      "element": 6,
                      "id": "1",
                      "type": "element",
                    },
                    Object {
                      "chain": true,
                      "element": 6,
                      "id": "2",
                      "type": "element",
                    },
                    Object {
                      "chain": true,
                      "element": 6,
                      "id": "3",
                      "type": "element",
                    },
                    Object {
                      "chain": true,
                      "element": 6,
                      "id": "4",
                      "type": "element",
                    },
                    Object {
                      "chain": true,
                      "element": 6,
                      "id": "5",
                      "type": "element",
                    },
                    Object {
                      "children": Array [
                        Object {
                          "element": 6,
                          "id": "7",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "j",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "k",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "l",
                          "type": "element",
                        },
                      ],
                      "fn": "methyl",
                      "id": "6",
                      "type": "fngroup",
                    },
                    Object {
                      "children": Array [
                        Object {
                          "element": 6,
                          "id": "9",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "m",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "n",
                          "type": "element",
                        },
                        Object {
                          "element": 1,
                          "id": "o",
                          "type": "element",
                        },
                      ],
                      "fn": "methyl",
                      "id": "8",
                      "type": "fngroup",
                    },
                    Object {
                      "element": 1,
                      "id": "b",
                      "type": "element",
                    },
                    Object {
                      "element": 1,
                      "id": "c",
                      "type": "element",
                    },
                    Object {
                      "element": 1,
                      "id": "d",
                      "type": "element",
                    },
                    Object {
                      "element": 1,
                      "id": "e",
                      "type": "element",
                    },
                    Object {
                      "element": 1,
                      "id": "f",
                      "type": "element",
                    },
                    Object {
                      "element": 1,
                      "id": "g",
                      "type": "element",
                    },
                    Object {
                      "element": 1,
                      "id": "h",
                      "type": "element",
                    },
                    Object {
                      "element": 1,
                      "id": "i",
                      "type": "element",
                    },
                  ],
                  "id": "a",
                  "location": Array [
                    1,
                  ],
                  "prefix": 5,
                  "type": "chain",
                },
              ],
              "fromText": "3,4-dimethyl-1-pentene",
              "idIndex": 24,
              "type": "molecule",
              "version": "0.1.0",
            }
      `);
});

test("trichloroethene mass", () => {
  expect(Molecule.createFromText("trichloroethene", "iupac").mass).toBe(131.38);
});

test("1-pentene mass", () => {
  expect(Molecule.createFromText("1-pentene", "iupac").mass).toBe(70.135);
});

test("3-methyl-1-pentene mass", () => {
  expect(Molecule.createFromText("3-methyl-1-pentene", "iupac").mass).toBe(
    84.162
  );
});

test("3,4-dimethyl-1-pentene mass", () => {
  expect(Molecule.createFromText("3,4-dimethyl-1-pentene", "iupac").mass).toBe(
    98.189
  );
});
