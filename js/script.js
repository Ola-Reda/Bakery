//add products to page
let box = document.querySelector('.store .box');
let addProducts = function (products) {
    let draw = ''
    products.forEach((product, key) => {
        draw += `
        <div class="col-md-4">
            <div class="card mt-3 mb-3" id="${product.id}">
                <div class="card-image">
                    <img src=${product.image} class="card-img-top image" alt="image">
                    <i class="fa-solid fa-cart-shopping cart-icon add-to-cart"></i>
                </div>
                <div class="card-body d-flex align-items-center justify-content-between">
                    <h5 class="card-title text-uppercase">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                </div>
            </div>
        </div>
        `
    })
    box.innerHTML = draw
}
addProducts(products);


//show cart 
const cartInfo = document.getElementById('cart-info')
const cart = document.getElementById('cart')
cartInfo.addEventListener('click',function () {
    cart.classList.toggle('show')
})

let productsInCart = []
function updateProductsInCart(productsInCart) {
    
}
//add to cart 
const cards = document.querySelectorAll('.card')
cards.forEach(card => {
    card.addEventListener("click", (e)=> {
        if(e.target.classList.contains('add-to-cart')){
            const cardId = document.querySelector('.card').id
            const cardName = document.querySelector('.card-title').innerHTML;
            const cardImage = document.querySelector('img').src;
            const cardPrice = document.querySelector('.card-text').innerHTML
            console.log(cardId, cardImage, cardName, cardPrice)
            let productsInCart = {
                id: cardId,
                name: cardName, 
                image: cardImage,
                price: cardPrice,
            }
            updateProductsInCart(productsInCart);
        } 
    })
})

//create li in list
const items = ['all', 'cakes', 'cupcakes', 'sweets', 'doughnuts']
const links = document.querySelector('.store .links')
items.forEach((item) => {
    const list = document.createElement('li');
    list.classList.add('col')
    list.setAttribute("data-filter", `.${item}`)
    list.innerHTML = item
    links.appendChild(list)
})


// let price = document.querySelector('.price')
// let cards = []
// function addToCart () {
//     if(cards[key] == null){
//         cards[key] = JSON.parse(JSON.stringify(products[key]));
//     }
//     reloadCard
// }

//add to cart 
// const cartIcons = document.querySelectorAll('.cart-icon') 
// console.log(cartIcons)
// cartIcons.forEach(function(icon) {
//     icon.addEventListener("click", function(event){
//         console.log(event.target)
//         // console.log(cartIcon.previousElementSibling.src.indexOf('img'))
//     })
// });

// function getpath (e) {
//     console.log(e.target)
//     console.log(cartIcon.previousElementSibling.src.indexOf('img'))
// }

// // let card = document.querySelector('.card')
// // for( i of products){
// //     console.log(i.category)
// //     cards.forEach(card => {
// //             card.classList.add(i.category)        
// //     })
// // }

// // let cards = document.querySelectorAll('.card')
// // cards.forEach(card => {
// //     products.forEach(product => {
// //         card.classList.add(product.category)
// //     })
    
// // })

// // products.forEach(product => {
// //     // console.log(product.category)
// //     cards.forEach(card => {
// //         // console.log(product)
// //         card.classList.add(product.category)
// //     })
// // })
// // let cards = document.querySelectorAll('.card');
// // cards.forEach(product => {
// //     console.log(product)
// //     cat = product.classList.add("category")
// // })



// //filter products
// let cards = document.querySelectorAll('.card');
// // function filterProducts (value) {
// //     btns.forEach(btn => {
// //         if(value.toUpperCase() === btn.innerText.toUpperCase()) {
// //             btn.classList.add('active')
// //         }else {
// //             btn.classList.remove('active')
// //         }
// //     })

// //     cards.forEach(card => {
// //         card.classList.add('hide')
// //         if(value == 'all'){
// //         card.classList.remove('hide')
// //         }else {
// //             if(card.classList.contains(value)) {
// //                 card.classList.remove('hide')
// //             }else {
// //                 card.classList.remove('hide')
// //             }
// //         }
// //     })
    
// // }

// // window.onload = () => {
// //     filterProducts('all')
// // }

// cards.forEach(card=> {
//     card.classList.add('hide')
// })
// //search products
// let cardsTitle = document.querySelectorAll('.card-title')
// let searchBtn = document.querySelector('.search')
// let inputValue = document.querySelector('#item').value;

// searchBtn.addEventListener('click', searchProducts)

// function searchProducts (e) {
//     e.preventDefault()
//     // cardsTitle.forEach((item,index) => {
//     //     if(item.innerText.includes(inputValue.toUpperCase())){
//     //         cards[index].classList.remove('hide')
//     //     }else {
//     //         cards[index].classList.add('hide')
//     //     }
//     // })
    
// }


