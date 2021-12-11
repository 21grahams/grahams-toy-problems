/* You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

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
];

Write a function that will take in this currentInventory array as its argument. Your function should access all the shoes across each designer and return them out in a flat list: {designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}

//...console output:
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Brunello Cucinelli, tasselled green low-top lace-up, 1100
// and so on...*/

const renderInventory = currentInventory => {
  // create a finalList var string
  let finalList = '';
  // loop over currentInventory
  for (let i = 0; i < currentInventory.length; i++) {
    // grab name of designer, store in finalList
    finalList += currentInventory[0].name + ', ';
    // access shoes array inside of currentInventory array
    let shoes = currentInventory[i].shoes;
    // loop over shoes array
    for (let j = 0; j < shoes.length; j++) {
      // grab name of shoes, store in finalList
      finalList += shoes[j].name + ', ';
      // grab price of shoes, store in finalList
      finalList += shoes[j].price + '\n';
    }
  }
  // return finalList
  return finalList;
}

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
];

console.log('renderInventory: ', renderInventory(currentInventory))

//...console output:
// Brunello Cucinelli, tasselled black low-top lace-up, 1000
// Brunello Cucinelli, tasselled green low-top lace-up, 1100
// Brunello Cucinelli, tasselled green low-top lace-up, 950
// Brunello Cucinelli, tasselled green low-top lace-up, 1050
// Gucci, red leather laced sneakers, 800
// Gucci, black leather laced sneakers, 900