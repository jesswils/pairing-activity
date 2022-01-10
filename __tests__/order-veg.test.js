const orderVeg = require('../katas/order-veg')

describe('order veg', function () {
    test('returns array', function () {
        expect(orderVeg([{name: 'Parsnip', type: 'root', quantity: 4},{name: 'Broccoli', type: 'brassica', quantity: 1},
        {name: 'Carrot', type: 'root', quantity: 5},
        {name: 'Onion', type: 'bulb', quantity: 3},
        {name: 'Chard', type: 'leaf', quantity: 3},
        {name: 'Runner beans', type: 'legume', quantity: 8}
      ])).toStrictEqual([
        {name: 'Broccoli', type: 'brassica', quantity: 1},
        {name: 'Onion', type: 'bulb', quantity: 3},
        {name: 'Chard', type: 'leaf', quantity: 3},
        {name: 'Parsnip', type: 'root', quantity: 4},
        {name: 'Carrot', type: 'root', quantity: 5},
        {name: 'Runner beans', type: 'legume', quantity: 8}
      ])
    })
})