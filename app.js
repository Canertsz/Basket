let products = [
    {
        id: 1,
        title: "Macbook Pro 2020",
        price: 10000
    },
    {
        id: 2,
        title: "Logitech K380 Keyboard",
        price: 900
    },
    {
        id: 3,
        title: "Logitech Pebble Mouse",
        price: 320
    }
]

let Basket = JSON.parse(localStorage.getItem("Basket")) || []

function setItem() {
    localStorage.setItem("Basket", JSON.stringify(Basket))
}

function addBasket(productID) {
    const basketItem = Basket.find(b => b.productID == productID)
    if (basketItem) {
        basketItem.amount++
    } else {
        Basket.push({
            productID: productID,
            amount: 1
        })
    }
    setItem()
}

function removeBasket(productID) {
    const basketItem = Basket.find(b => b.productID == productID)
    if (basketItem.amount > 1) {
        basketItem.amount--
    } else {
        Basket = Basket.filter((i) => {
            return i.productID !== productID
        })
    }
    setItem()
}

function totalPrice() {
    return Basket.reduce((prev, curr) => {
        const product = products.find(p => p.id == curr.productID)
        return prev += (product.price * curr.amount)
    }, 0)
}

addBasket(2)
removeBasket(2)
console.log(totalPrice())


// example basket,
// [{ProductID: 3 Amount: 2}, {ProductID: 9 Amount: 1}]