
const addToCard=()=>{
    const productName=document.getElementById("product_name").value
    const productQuintity=document.getElementById("product_quintity").value
    displayCartProduct(productName,productQuintity)
}
// display cart product
const displayCartProduct=(productName,productQuintity)=>{
    console.log(productName,productQuintity)
    const displayProductContainer=document.getElementById("container")
    let li=document.createElement("li")
    li.innerText=`${productName}:${productQuintity}`
    displayProductContainer.appendChild(li)
    setStorCard(productName,productQuintity)
}
// getLocalStorage

const getItems=()=>{
    let cart={}
    const cardAddedItems=localStorage.getItem("cart")
    if(cardAddedItems){
        cart=JSON.parse(cardAddedItems)
        
    }
    return cart
}


const setStorCard=(productName,productQuintity)=>{
    const cart=getItems()
    cart[productName]=productQuintity
    const saveCard=JSON.stringify(cart)
    localStorage.setItem("cart",saveCard)
}

const displayLocalStorageData=()=>{
    const cart=getItems()
    console.log(cart)
    for(item in cart){
        displayCartProduct(item,cart[item])
    }
}
displayLocalStorageData()