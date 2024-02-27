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



// display functions when page load 
window.onload = function() {
    displayLinks();
    addProducts(products)
    showChef(chefData)
}


//display category links in page
const links = document.querySelector('.store .links')
function displayLinks() {
    const allCategories = products.map((item) => {
        return item.category
    })
    allCategories.unshift('all')
    const unquieCategories = new Set (allCategories)
    let list = ''
    unquieCategories.forEach(category => {
        list += `
            <li data-filter="${category}">${category}</li>
        `
    })
    links.innerHTML = list
    //select all links
    const allLinks = document.querySelectorAll('.store .links li')
    allLinks.forEach(link => {
        link.onclick = function(e) {
            const filterCategory = e.target.dataset.filter
            const selectedCategory = products.filter(product => {
                if(filterCategory === product.category) {
                    return product
                }
            })
            if(filterCategory === 'all') {
                addProducts(products)
            }else {
                addProducts(selectedCategory)
            }
            //add active class
            allLinks.forEach(link => {
                link.classList.remove("active")
            })
            link.classList.add("active")
        }
    })
}


//add products to page
const productsBox = document.querySelector('.store .box');
function addProducts(products) {
    let drawProducts = ''
    products.forEach((product) => {
        drawProducts += `
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
    productsBox.innerHTML = drawProducts
}



//filter products to search
const searchBtn = document.querySelector('.search')
const input = document.querySelector('.input')
searchBtn.addEventListener('click', search)
function search() {
    const value = input.value
    if(value !== "") {
        const filteredProducts = products.filter(product => {
            return product.name.includes(value) 
        })
        addProducts(filteredProducts)
    }
}



//function to display chef data
const chefBox = document.querySelector('.chef .row')
function showChef(data) {
    let display = ''
    data.map(chef => {
        display += `
        <div class="col-md-4">
            <div id="${chef.id}" class="box mb-4 position-relative overflow-hidden rounded">
                <img src="${chef.image}" alt="image" class="img-fluid">
                <div class="icons">
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        `
    })
    chefBox.innerHTML = display
}
