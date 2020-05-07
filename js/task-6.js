const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];

// const calculateTotalPrice = function (allProducts, productName) {
//     let totalPrice = 0;
//     for (const entry in allProducts) {
//         if (allProducts[entry].name === productName) {
//             totalPrice = allProducts[entry].price * allProducts[entry].quantity;
//             return totalPrice;
//         }
//     }
// };

const calculateTotalPrice = function (allProducts, productName) {
    let totalPrice = 0;
    for (const product of allProducts) {
        if (product.name === productName) {
            totalPrice = product.price * product.quantity
            return totalPrice
        }
    }
};

console.log(calculateTotalPrice(products, 'Радар'));
console.log(calculateTotalPrice(products, 'Дроид')); 