let products = [
    {
        id: 1,
        name: 'sweets',
        image: 'images/sweets-1.jpeg',
        price: 5, 
        category: "sweets"
    },
    {
        id: 2,
        name: 'cupcake',
        image: 'images/cupcake-1.jpeg',
        price: 7,
        category: "cupcake"
    },
    {
        id: 3,
        name: 'cake',
        image: 'images/cake-1.jpeg',
        price: 10,
        category: "cake"
    },
    {
        id: 4,
        name: 'doughnut',
        image: 'images/doughnut-1.jpeg',
        price: 8,
        category: "doughnut"
    },
    {
        id: 5,
        name: 'sweets',
        image: 'images/sweets-2.jpeg',
        price: 4,
        category: "sweets"
    },
    {
        id: 6,
        name: 'cupcake',
        image: 'images/cupcake-2.jpeg',
        price: 9,
        category: "cupcake"
    },
    {
        id: 7,
        name: 'cake',
        image: 'images/cake-2.jpeg',
        price: 15,
        category: "cake"
    },
    {
        id: 8,
        name: 'doughnut',
        image: 'images/doughnut-2.jpeg',
        price: 4,
        category: "doughnut"
    },
    {
        id: 9,
        name: 'sweets',
        image: 'images/sweets-3.jpeg',
        price: 5,
        category: "sweets"
    },
    {
        id: 10,
        name: 'cupcake',
        image: 'images/cupcake-3.jpeg',
        price: 12,
        category: "cupcake"
    },
    {
        id: 11,
        name: 'cake',
        image: 'images/cake-3.jpeg',
        price: 30,
        category: "cake"
    },
    {
        id: 12,
        name: 'doughnut',
        image: 'images/doughnut-3.jpeg',
        price: 12,
        category: "doughnut"
    }
];
let box = document.querySelector('.store .box');
let btns = document.querySelectorAll('ul li');

console.log(products.keys())


//add products to page
let addProducts = function (products) {
    let draw = ''
    products.map(product => {
        draw += `
        <div class="col-md-4">
            <div class="card mt-3 mb-3">
                <div class="card-image">
                    <img src=${product.image} class="card-img-top" alt="image">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="card-body d-flex align-items-center justify-content-between">
                    <h5 class="card-title text-capitalize">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                </div>
            </div>
        </div>
        `
    })
    box.innerHTML = draw
}
addProducts(products);


// let card = document.querySelector('.card')
// for( i of products){
//     console.log(i.category)
//     cards.forEach(card => {
//             card.classList.add(i.category)        
//     })
// }

// let cards = document.querySelectorAll('.card')
// cards.forEach(card => {
//     products.forEach(product => {
//         card.classList.add(product.category)
//     })
    
// })

// products.forEach(product => {
//     // console.log(product.category)
//     cards.forEach(card => {
//         // console.log(product)
//         card.classList.add(product.category)
//     })
// })
let cards = document.querySelectorAll('.card');
// cards.forEach(product => {
//     console.log(product)
//     cat = product.classList.add("category")
// })


//filter products
function filterProducts (value) {
    btns.forEach(btn => {
        if(value.toUpperCase() === btn.innerText.toUpperCase()) {
            btn.classList.add('active')
        }else {
            btn.classList.remove('active')
        }
    })

    cards.forEach(card => {
        card.classList.add('hide')
        if(value == 'all'){
        card.classList.remove('hide')
        }else {
            if(card.classList.contains(value)) {
                card.classList.remove('hide')
            }else {
                card.classList.remove('hide')
            }
        }
    })
    
}

window.onload = () => {
    filterProducts('all')
}

//search products

