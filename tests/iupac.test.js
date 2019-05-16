/* global test expect */
const iupac = require("./../src/parsers/iupac");

test("Butane", () => {
  expect(iupac("butane")).toMatchInlineSnapshot(`
        Array [
          Object {
            "bondCount": "ane",
            "location": Array [],
            "prefix": "but",
            "subgroups": Array [],
            "type": "chain",
          },
        ]
    `);
});

test("Butene", () => {
  expect(iupac("but-2-ene")).toMatchInlineSnapshot(`
        Array [
          Object {
            "bondCount": "ene",
            "location": Array [
              2,
            ],
            "prefix": "but",
            "subgroups": Array [],
            "type": "chain",
          },
        ]
    `);
});

test("Butyne Different Location", () => {
  expect(iupac("but-2,3-yne")).toMatchInlineSnapshot(`
        Array [
          Object {
            "bondCount": "yne",
            "location": Array [
              2,
              3,
            ],
            "prefix": "but",
            "subgroups": Array [],
            "type": "chain",
          },
        ]
    `);
});

test("Butyne Same Location", () => {
  expect(iupac("but-2,2-yne")).toMatchInlineSnapshot(`
        Array [
          Object {
            "bondCount": "yne",
            "location": Array [
              2,
              2,
            ],
            "prefix": "but",
            "subgroups": Array [],
            "type": "chain",
          },
        ]
    `);
});

test("Butyne Same Location, Extra Comma", () => {
  expect(iupac("but-2,2,-yne")).toMatchInlineSnapshot(`
        Array [
          Object {
            "bondCount": "yne",
            "location": Array [
              2,
              2,
            ],
            "prefix": "but",
            "subgroups": Array [],
            "type": "chain",
          },
        ]
    `);
});

test("Cyclobutane", () => {
  expect(iupac("cyclobutane")).toMatchInlineSnapshot(`
        Array [
          Object {
            "bondCount": "ane",
            "cyclic": true,
            "location": Array [],
            "prefix": "but",
            "subgroups": Array [],
            "type": "chain",
          },
        ]
    `);
});

test("trichloromethane", () => {
  expect(iupac("trichloromethane")).toMatchInlineSnapshot(`
        Array [
          Object {
            "bondCount": "ane",
            "location": Array [],
            "prefix": "meth",
            "subgroups": Array [
              Object {
                "fn": "chloro",
                "groupCount": "tri",
                "location": Array [],
                "type": "fngroup",
              },
            ],
            "type": "chain",
          },
        ]
    `);
});

test("trifluoroethane", () => {
  expect(iupac("trifluoroethane")).toMatchInlineSnapshot(`
        Array [
          Object {
            "bondCount": "ane",
            "location": Array [],
            "prefix": "eth",
            "subgroups": Array [
              Object {
                "fn": "fluoro",
                "groupCount": "tri",
                "location": Array [],
                "type": "fngroup",
              },
            ],
            "type": "chain",
          },
        ]
    `);
});

test("1,1,1,-trifluoroethane", () => {
  expect(iupac("1,1,1,-trifluoroethane")).toMatchInlineSnapshot(`
        Array [
          Object {
            "bondCount": "ane",
            "location": Array [],
            "prefix": "eth",
            "subgroups": Array [
              Object {
                "fn": "fluoro",
                "groupCount": "tri",
                "location": Array [
                  1,
                  1,
                  1,
                ],
                "type": "fngroup",
              },
            ],
            "type": "chain",
          },
        ]
    `);
});

test("2-bromo-2-chloro-1,1,1,-trifluoroethane", () => {
  expect(iupac("2-bromo-2-chloro-1,1,1,-trifluoroethane"))
    .toMatchInlineSnapshot(`
        Array [
          Object {
            "bondCount": "ane",
            "location": Array [],
            "prefix": "eth",
            "subgroups": Array [
              Object {
                "fn": "bromo",
                "location": Array [
                  2,
                ],
                "type": "fngroup",
              },
              Object {
                "fn": "chloro",
                "location": Array [
                  2,
                ],
                "type": "fngroup",
              },
              Object {
                "fn": "fluoro",
                "groupCount": "tri",
                "location": Array [
                  1,
                  1,
                  1,
                ],
                "type": "fngroup",
              },
            ],
            "type": "chain",
          },
        ]
    `);
});

test("propan-1,2-diol", () => {
  expect(iupac("propan-1,2-diol")).toMatchInlineSnapshot(`
    Array [
      Object {
        "bondCount": "an",
        "location": Array [],
        "prefix": "prop",
        "subgroups": Array [
          Object {
            "fn": "ol",
            "groupCount": "di",
            "location": Array [
              1,
              2,
            ],
            "type": "fngroup",
          },
        ],
        "type": "chain",
      },
    ]
  `);
});
