/* Fashion Design Part C

You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

It looks like this:

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
]

The task now is to find all the laced shoes, but we are going to render them in a somewhat complex format. Your function should return shoe names that contain "lace" in them, and indicate which word contains "lace". The return value's format should be structured like this:

var expectedResult = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
]; */

// input: a nested array
// output: an array containing all the laced shoes that contain "lace" in them,
//   and indicate which word contains "lace"
// constraints: none at this time
// edge cases: none at this time
const fashionInventory = (renderInventory) => {
  // create a resultArr
  let resultArr = [];
  // create nameWords object, containing array
  let resultObj = { nameWords: [] };
  // create targetWordIndex string
  let targetWordIndex = "";
  // loop over renderInventory array
  for (let i = 0; i < renderInventory.length; i++) {
    // create variable for shoes
    let shoes = renderInventory[i].shoes;
    // loop over shoes array
    for (let j = 0; j < shoes.length; j++) {
      // create variable for designerDescription
      let designerDescription = shoes[j].name;
      let designerDescriptionArr = designerDescription.split(" ");
      // add designerDescription to nameWords array if it contains lace
      let laceObj = {};
      if (containsLace(shoes[j])) {
        laceObj.nameWords = designerDescriptionArr;
        laceObj.targetWordIndex = indexOfLace(designerDescriptionArr);
        resultArr.push(laceObj);
      }
    }
  }
  return resultArr;
};

const containsLace = (lace) => {
  if (lace.name.indexOf("lace") !== -1) {
    return true;
  } else {
    return false;
  }
};

const indexOfLace = (idx) => {
  for (let i = 0; i < idx.length; i++) {
    if (idx[i].indexOf("lace") !== -1) {
      return i;
    }
  }
};

var currentInventory = [
  {
    name: "Brunello Cucinelli",
    shoes: [
      { name: "tasselled black low-top lace-up", price: 1000 },
      { name: "tasselled green low-top lace-up", price: 1100 },
      { name: "plain beige suede moccasin", price: 950 },
      { name: "plain olive suede moccasin", price: 1050 },
    ],
  },
  {
    name: "Gucci",
    shoes: [
      { name: "red leather laced sneakers", price: 800 },
      { name: "black leather laced sneakers", price: 900 },
    ],
  },
];

console.log(fashionInventory(currentInventory));
/*
var expectedResult = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
]; */
