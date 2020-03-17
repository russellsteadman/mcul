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

test("Can branch a carbon chain manually using sub", () => {
  let chain = new Molecule();

  let carbons = [];
  for (let i = 0; i < 15; i++) {
    carbons.push(chain.createAtom("C"));
  }

  for (let i = 0; i < 14; i++) {
    chain.bond(carbons[i], carbons[i + 1]);
  }

  chain.add("methyl", carbons[3]);

  chain.hydrogenateCarbons();

  expect(chain.getBranchPaths(carbons[7])).toMatchInlineSnapshot(`
Array [
  "7-y",
  "7-x",
  "7-8-10",
  "7-8-z",
  "7-8-9-12",
  "7-8-9-11",
  "7-8-9-a-14",
  "7-8-9-a-13",
  "7-8-9-a-b-16",
  "7-8-9-a-b-15",
  "7-8-9-a-b-c-18",
  "7-8-9-a-b-c-17",
  "7-8-9-a-b-c-d-1a",
  "7-8-9-a-b-c-d-19",
  "7-8-9-a-b-c-d-e-1d",
  "7-8-9-a-b-c-d-e-1c",
  "7-8-9-a-b-c-d-e-1b",
  "7-6-w",
  "7-6-v",
  "7-6-5-u",
  "7-6-5-t",
  "7-6-5-4-s",
  "7-6-5-4-r",
  "7-6-5-4-3-q",
  "7-6-5-4-3-f-i",
  "7-6-5-4-3-f-h",
  "7-6-5-4-3-f-g",
  "7-6-5-4-3-2-p",
  "7-6-5-4-3-2-o",
  "7-6-5-4-3-2-1-n",
  "7-6-5-4-3-2-1-m",
  "7-6-5-4-3-2-1-0-l",
  "7-6-5-4-3-2-1-0-k",
  "7-6-5-4-3-2-1-0-j",
]
`);
});

test("Can provide elemental compositions", () => {
  let butane = new Molecule();
  butane.chainCarbons(4);
  butane.hydrogenateCarbons();

  expect(butane.atomCounts).toMatchInlineSnapshot(`
    Object {
      "atomic": Object {
        "1": 10,
        "6": 4,
      },
      "symbol": Object {
        "C": 4,
        "H": 10,
      },
    }
  `);
  expect(butane.moleFraction).toMatchInlineSnapshot(`
Object {
  "atomic": Object {
    "1": 0.7143,
    "6": 0.2857,
  },
  "symbol": Object {
    "C": 0.2857,
    "H": 0.7143,
  },
}
`);
  expect(butane.massFraction).toMatchInlineSnapshot(`
Object {
  "atomic": Object {
    "1": 0.1734,
    "6": 0.8266,
  },
  "symbol": Object {
    "C": 0.8266,
    "H": 0.1734,
  },
}
`);
});
