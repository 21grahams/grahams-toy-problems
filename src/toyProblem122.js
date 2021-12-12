/* Fashion Design Part B

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


Your function should return the average cost of all shoes per designer in this format:

var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
} */

const calculateAveragePricePerDesigner = currentInventory => {
  let resultObj = {designers: []}

  for (let i = 0; i < currentInventory.length; i++) {
    let shoesObj = currentInventory[i].shoes
    let innerObj = {
      name: currentInventory[i].name,
      averagePrice: getAverage(shoesObj)
    }
    resultObj.designers.push(innerObj)
  }
  return resultObj
}

const getAverage = shoesObj => {
  let sum = 0;
  for (let j = 0; j < shoesObj.length; j++) {
      let average = shoesObj[j].price
      sum += average;
    
  }
  return sum / shoesObj.length;
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

console.log(calculateAveragePricePerDesigner(currentInventory)) // should output:
/*  {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
} */