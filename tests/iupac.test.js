/* global test expect */
const Molecule = require("../src/mcul");

test("Butane", () => {
  expect(Molecule.createFromText("butane", "iupac").serialize())
    .toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "bondCount": 1,
              "children": Array [
                Object {
                  "chain": true,
                  "count": 4,
                  "element": 6,
                  "id": "1",
                  "type": "element",
                },
                Object {
                  "chain": true,
                  "count": 10,
                  "element": 1,
                  "id": "3",
                  "type": "element",
                },
              ],
              "id": "2",
              "location": Array [],
              "prefix": 4,
              "type": "chain",
            },
          ],
          "fromText": "butane",
          "idIndex": 3,
          "type": "molecule",
          "version": "0.1.0",
        }
    `);
});

test("Butene", () => {
  expect(Molecule.createFromText("but-2-ene", "iupac").serialize())
    .toMatchInlineSnapshot(`
    Object {
      "children": Array [
        Object {
          "bondCount": 2,
          "children": Array [
            Object {
              "chain": true,
              "count": 4,
              "element": 6,
              "id": "1",
              "type": "element",
            },
            Object {
              "chain": true,
              "count": 8,
              "element": 1,
              "id": "3",
              "type": "element",
            },
          ],
          "id": "2",
          "location": Array [
            2,
          ],
          "prefix": 4,
          "type": "chain",
        },
      ],
      "fromText": "but-2-ene",
      "idIndex": 3,
      "type": "molecule",
      "version": "0.1.0",
    }
  `);
});

test("Butyne Different Location", () => {
  expect(Molecule.createFromText("but-2,3-yne", "iupac").serialize())
    .toMatchInlineSnapshot(`
    Object {
      "children": Array [
        Object {
          "bondCount": 3,
          "children": Array [
            Object {
              "chain": true,
              "count": 4,
              "element": 6,
              "id": "1",
              "type": "element",
            },
            Object {
              "chain": true,
              "count": 2,
              "element": 1,
              "id": "3",
              "type": "element",
            },
          ],
          "id": "2",
          "location": Array [
            2,
            3,
          ],
          "prefix": 4,
          "type": "chain",
        },
      ],
      "fromText": "but-2,3-yne",
      "idIndex": 3,
      "type": "molecule",
      "version": "0.1.0",
    }
  `);
});

test("Butyne Same Location", () => {
  expect(Molecule.createFromText("but-2,2-yne", "iupac").serialize())
    .toMatchInlineSnapshot(`
    Object {
      "children": Array [
        Object {
          "bondCount": 3,
          "children": Array [
            Object {
              "chain": true,
              "count": 4,
              "element": 6,
              "id": "1",
              "type": "element",
            },
            Object {
              "chain": true,
              "count": 2,
              "element": 1,
              "id": "3",
              "type": "element",
            },
          ],
          "id": "2",
          "location": Array [
            2,
            2,
          ],
          "prefix": 4,
          "type": "chain",
        },
      ],
      "fromText": "but-2,2-yne",
      "idIndex": 3,
      "type": "molecule",
      "version": "0.1.0",
    }
  `);
});

test("Butyne Same Location, Extra Comma", () => {
  expect(Molecule.createFromText("but-2,2,-yne", "iupac").serialize())
    .toMatchInlineSnapshot(`
    Object {
      "children": Array [
        Object {
          "bondCount": 3,
          "children": Array [
            Object {
              "chain": true,
              "count": 4,
              "element": 6,
              "id": "1",
              "type": "element",
            },
            Object {
              "chain": true,
              "count": 2,
              "element": 1,
              "id": "3",
              "type": "element",
            },
          ],
          "id": "2",
          "location": Array [
            2,
            2,
          ],
          "prefix": 4,
          "type": "chain",
        },
      ],
      "fromText": "but-2,2,-yne",
      "idIndex": 3,
      "type": "molecule",
      "version": "0.1.0",
    }
  `);
});

test("Cyclobutane", () => {
  expect(Molecule.createFromText("cyclobutane", "iupac").serialize())
    .toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "bondCount": 1,
              "children": Array [
                Object {
                  "chain": true,
                  "count": 4,
                  "element": 6,
                  "id": "1",
                  "type": "element",
                },
                Object {
                  "chain": true,
                  "count": 10,
                  "element": 1,
                  "id": "3",
                  "type": "element",
                },
              ],
              "cyclic": true,
              "id": "2",
              "location": Array [],
              "prefix": 4,
              "type": "chain",
            },
          ],
          "fromText": "cyclobutane",
          "idIndex": 3,
          "type": "molecule",
          "version": "0.1.0",
        }
    `);
});

test("trichloromethane", () => {
  expect(Molecule.createFromText("trichloromethane", "iupac").serialize())
    .toMatchInlineSnapshot(`
            Object {
              "children": Array [
                Object {
                  "bondCount": 1,
                  "children": Array [
                    Object {
                      "children": Array [
                        Object {
                          "element": 17,
                          "id": "2",
                          "type": "element",
                        },
                      ],
                      "count": 3,
                      "fn": "chloro",
                      "id": "1",
                      "location": Array [],
                      "type": "fngroup",
                    },
                    Object {
                      "chain": true,
                      "element": 6,
                      "id": "3",
                      "type": "element",
                    },
                    Object {
                      "chain": true,
                      "element": 1,
                      "id": "5",
                      "type": "element",
                    },
                  ],
                  "id": "4",
                  "location": Array [],
                  "prefix": 1,
                  "type": "chain",
                },
              ],
              "fromText": "trichloromethane",
              "idIndex": 5,
              "type": "molecule",
              "version": "0.1.0",
            }
      `);
});

test("trifluoroethane", () => {
  expect(Molecule.createFromText("trifluoroethane", "iupac").serialize())
    .toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "bondCount": 1,
              "children": Array [
                Object {
                  "children": Array [
                    Object {
                      "element": 9,
                      "id": "2",
                      "type": "element",
                    },
                  ],
                  "count": 3,
                  "fn": "fluoro",
                  "id": "1",
                  "location": Array [],
                  "type": "fngroup",
                },
                Object {
                  "chain": true,
                  "count": 2,
                  "element": 6,
                  "id": "3",
                  "type": "element",
                },
                Object {
                  "chain": true,
                  "count": 3,
                  "element": 1,
                  "id": "5",
                  "type": "element",
                },
              ],
              "id": "4",
              "location": Array [],
              "prefix": 2,
              "type": "chain",
            },
          ],
          "fromText": "trifluoroethane",
          "idIndex": 5,
          "type": "molecule",
          "version": "0.1.0",
        }
    `);
});

test("1,1,1,-trifluoroethane", () => {
  expect(Molecule.createFromText("1,1,1,-trifluoroethane", "iupac").serialize())
    .toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "bondCount": 1,
              "children": Array [
                Object {
                  "children": Array [
                    Object {
                      "element": 9,
                      "id": "2",
                      "type": "element",
                    },
                  ],
                  "count": 3,
                  "fn": "fluoro",
                  "id": "1",
                  "location": Array [
                    1,
                    1,
                    1,
                  ],
                  "type": "fngroup",
                },
                Object {
                  "chain": true,
                  "count": 2,
                  "element": 6,
                  "id": "3",
                  "type": "element",
                },
                Object {
                  "chain": true,
                  "count": 3,
                  "element": 1,
                  "id": "5",
                  "type": "element",
                },
              ],
              "id": "4",
              "location": Array [],
              "prefix": 2,
              "type": "chain",
            },
          ],
          "fromText": "1,1,1,-trifluoroethane",
          "idIndex": 5,
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
              "children": Array [
                Object {
                  "bondCount": 1,
                  "children": Array [
                    Object {
                      "children": Array [
                        Object {
                          "element": 35,
                          "id": "2",
                          "type": "element",
                        },
                      ],
                      "fn": "bromo",
                      "id": "1",
                      "location": Array [
                        2,
                      ],
                      "type": "fngroup",
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
                      "location": Array [
                        2,
                      ],
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
                      "count": 3,
                      "fn": "fluoro",
                      "id": "5",
                      "location": Array [
                        1,
                        1,
                        1,
                      ],
                      "type": "fngroup",
                    },
                    Object {
                      "chain": true,
                      "count": 2,
                      "element": 6,
                      "id": "7",
                      "type": "element",
                    },
                    Object {
                      "chain": true,
                      "element": 1,
                      "id": "9",
                      "type": "element",
                    },
                  ],
                  "id": "8",
                  "location": Array [],
                  "prefix": 2,
                  "type": "chain",
                },
              ],
              "fromText": "2-bromo-2-chloro-1,1,1,-trifluoroethane",
              "idIndex": 9,
              "type": "molecule",
              "version": "0.1.0",
            }
      `);
});

test("propan-1,2-diol", () => {
  expect(Molecule.createFromText("propan-1,2-diol", "iupac").serialize())
    .toMatchInlineSnapshot(`
        Object {
          "children": Array [
            Object {
              "bondCount": 1,
              "children": Array [
                Object {
                  "children": Array [
                    Object {
                      "element": 8,
                      "id": "2",
                      "type": "element",
                    },
                    Object {
                      "element": 1,
                      "id": "3",
                      "type": "element",
                    },
                  ],
                  "count": 2,
                  "fn": "ol",
                  "id": "1",
                  "location": Array [
                    1,
                    2,
                  ],
                  "type": "fngroup",
                },
                Object {
                  "chain": true,
                  "count": 3,
                  "element": 6,
                  "id": "4",
                  "type": "element",
                },
                Object {
                  "chain": true,
                  "count": 6,
                  "element": 1,
                  "id": "6",
                  "type": "element",
                },
              ],
              "id": "5",
              "location": Array [],
              "prefix": 3,
              "type": "chain",
            },
          ],
          "fromText": "propan-1,2-diol",
          "idIndex": 6,
          "type": "molecule",
          "version": "0.1.0",
        }
    `);
});

test("3,4-dimethyl-1-pentene", () => {
  expect(Molecule.createFromText("3,4-dimethyl-1-pentene", "iupac").serialize())
    .toMatchInlineSnapshot(`
    Object {
      "children": Array [
        Object {
          "bondCount": 2,
          "children": Array [
            Object {
              "children": Array [
                Object {
                  "element": 6,
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
              "count": 2,
              "fn": "methyl",
              "id": "1",
              "location": Array [
                3,
                4,
              ],
              "type": "fngroup",
            },
            Object {
              "chain": true,
              "count": 5,
              "element": 6,
              "id": "4",
              "type": "element",
            },
            Object {
              "chain": true,
              "count": 8,
              "element": 1,
              "id": "6",
              "type": "element",
            },
          ],
          "id": "5",
          "location": Array [
            1,
          ],
          "prefix": 5,
          "type": "chain",
        },
      ],
      "fromText": "3,4-dimethyl-1-pentene",
      "idIndex": 6,
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
  expect(Molecule.createFromText("3-methyl-1-pentene", "iupac").mass).toBe(84.162);
});

test("3,4-dimethyl-1-pentene mass", () => {
  expect(Molecule.createFromText("3,4-dimethyl-1-pentene", "iupac").mass).toBe(98.189);
});
