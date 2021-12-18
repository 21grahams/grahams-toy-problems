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

Your task is to find all of the shoes with "black" in the name. Your function should filter these shoes, and return them in a "flat list" similarly to Part A */

const fashionInventory = blacklist => {
  // create a flatList string
  let flatList = '';
  // loop over blackList
  for (let i = 0; i < blacklist.length; i++) {
    // create a variable for designerName
    let designerName = blacklist[i].name
    // create a variable for shoes
    let shoes = blacklist[i].shoes
    // loop over shoes array
    for (let j = 0; j < shoes.length; j++) {
      // create a variable for inventoryObj
      let inventoryObj = shoes[j]
      // if inventoryObj name contains the word black
      // add name of designer, inventoryObj and flatlist to flatList string
      if (inventoryObj.name.includes('black')) {
        flatList += designerName + ', ' + inventoryObj.name + ', ' + inventoryObj.price
        if ((i === blacklist.length - 1) && (j === shoes.length - 1)) {
          return flatList
        } else {
          flatList += '\n'
        }
      }
    }
  }
  // return flatList string
  return flatList
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
]

console.log(fashionInventory(currentInventory))
/*
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Gucci, black leather laced sneakers, 900
*/