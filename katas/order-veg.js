/*
  The orderVeg function should take a array of vegetables and return a new array in which the vegetables are sorted in ascending order according to quantity.
  e.g.
  */
  let vegCounter = [{name: 'Parsnip', type: 'root', quantity: 4},{name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Runner beans', type: 'legume', quantity: 8}
]
// should return:
let answer = [
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Runner beans', type: 'legume', quantity: 8}
]


function orderVeg(veg) {
  veg.sort((a, b) => {
  return a.quantity - b.quantity
})
  return veg
}

// veg.reduce((pv, cv) => {if (pv.quantity > cv.quantity) {
//   veg.splice(veg.indexOf(cv), 1)
//   veg.splice(veg.indexOf(pv), 0, cv)
// } 
// })
module.exports = orderVeg;
