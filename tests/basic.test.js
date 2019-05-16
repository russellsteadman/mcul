/* global test expect */
const basic = require("../src/parsers/basic");

test("Hydrochloric acid", () => {
  expect(basic("HCl")).toMatchInlineSnapshot(`
    Array [
      Object {
        "element": 1,
        "type": "element",
      },
      Object {
        "element": 17,
        "type": "element",
      },
    ]
  `);
});

test("Ligand Complex", () => {
  expect(basic("Al(NH)")).toMatchInlineSnapshot(`
    Array [
      Object {
        "element": 13,
        "type": "element",
      },
      Object {
        "subgroup": Array [
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
    ]
  `);
});

test("Layered Parentheses", () => {
  expect(basic("Al(N(HCl))")).toMatchInlineSnapshot(`
    Array [
      Object {
        "element": 13,
        "type": "element",
      },
      Object {
        "subgroup": Array [
          Object {
            "element": 7,
            "type": "element",
          },
          Object {
            "subgroup": Array [
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
    ]
  `);
});

test("Layered Parentheses With Atomic Counts", () => {
  expect(basic("Al3(N2(HCl))")).toMatchInlineSnapshot(`
    Array [
      Object {
        "count": 3,
        "element": 13,
        "type": "element",
      },
      Object {
        "subgroup": Array [
          Object {
            "count": 2,
            "element": 7,
            "type": "element",
          },
          Object {
            "subgroup": Array [
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
    ]
  `);
});

test("Layered Parentheses With Atomic and Group Counts", () => {
  expect(basic("Al3(N2(HCl)4)5")).toMatchInlineSnapshot(`
    Array [
      Object {
        "count": 3,
        "element": 13,
        "type": "element",
      },
      Object {
        "count": 5,
        "subgroup": Array [
          Object {
            "count": 2,
            "element": 7,
            "type": "element",
          },
          Object {
            "count": 4,
            "subgroup": Array [
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
    ]
  `);
});

test("Advanced Ligand Complex Without Charges", () => {
  expect(basic("[Cu(NH3)6]_3(H2O)12")).toMatchInlineSnapshot(`
    Array [
      Object {
        "count": 3,
        "subgroup": Array [
          Object {
            "element": 29,
            "type": "element",
          },
          Object {
            "count": 6,
            "subgroup": Array [
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
        "subgroup": Array [
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
    ]
  `);
});

test("Advanced Ligand Complex With Charges", () => {
  expect(basic("[Cu(NH3)6]^+6_3(H2O)^+5_12")).toMatchInlineSnapshot(`
    Array [
      Object {
        "charge": 6,
        "count": 3,
        "subgroup": Array [
          Object {
            "element": 29,
            "type": "element",
          },
          Object {
            "count": 6,
            "subgroup": Array [
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
        "subgroup": Array [
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
    ]
  `);
});
