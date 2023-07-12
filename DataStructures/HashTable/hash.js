/*  

Hash Table, Hash Function

Scenario: You have an array of prices for a product and you want to bind the prices to the product name.

*/

const hashTable = [5, 6, 1, 1.99, 2545.99, 103]

/* 

Banana = 5
Apple = 6
Orange = 1
Watermelon = 1.99
Television = 2545.99
SSD = 103

*/

function hashFunction(productName) {
    let products = { "Banana": 0, "Apple": 1, "Orange": 2, "Watermelon": 3, "Television": 4, "SSD": 5 }
    return products[productName]
}

let product = "Banana"
console.log(`${product} => ${hashTable[hashFunction(product)] ? hashTable[hashFunction(product)] + "₺" : "Product not found"}`)
