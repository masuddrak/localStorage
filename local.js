const addToCard = () => {
    const productName = document.getElementById("product_Name")
    const productQuntity = document.getElementById("product_quntity")
    const productNameValue = productName.value
    const productQuntityValue = productQuntity.value
    productName.value = ""
    productQuntity.value = ""
    displayAddedProduct(productNameValue, productQuntityValue)
    saveStoredCard(productNameValue, productQuntityValue)
}

const displayAddedProduct = (product, quntity) => {
    const productConatiner = document.getElementById("add_product_container")
    const li = document.createElement("li")
    li.innerText = `${product} : ${quntity}`
    productConatiner.appendChild(li)

}
const getLoacalStorage = () => {
    let card = {}
    const getCard = localStorage.getItem("card")
    if (getCard) {
        card = JSON.parse(getCard)
    }
    return card
}


const saveStoredCard = (product, quntity) => {
    const card = getLoacalStorage()
    card[product] = quntity

    const cardStringify = JSON.stringify(card)
    console.log(card)
    localStorage.setItem("card", cardStringify)
}
const displayLocalStorageData = () => {
    const saveCard = getLoacalStorage()

    for (const product in saveCard) {

        displayAddedProduct(product,saveCard[product])
    }
}
displayLocalStorageData()