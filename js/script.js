let box = document.querySelector('.store .box');

let addProducts = function (products) {
    let draw = ''
    products.map(product => {
        draw += `
        <div class="col-md-4">
            <div class="card mt-3 mb-3">
                <img src=${product.image} class="card-img-top" alt="image">
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
addProducts(products)
