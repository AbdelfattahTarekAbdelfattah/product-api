let sec=document.getElementById("AP");

fetch("https://dummyjson.com/products")
.then(result => result.json())
.then(result =>{
    let products = result.products;
    // console.log(products);
    products.forEach((products)=> {
        console.log(sec.innerHTML +=`
        <div class="box">
        <img src="${products.thumbnail}">
        <h2>${products.title}</h2>
        <hr>
        <p>${products.price} $</p>
        <hr>
        <div class="end-box">
            <p>${products.category}</p>
            <hr>
            <p>${products.brand}</p>
            <hr>
        </div>
    </div>  
        `)
        // console.log(products.title)
        // console.log(products.description)
        // console.log(products.discountPercentage)
        // console.log(products.rating)
        // console.log(products.stock)
        // console.log(products.brand)
        // console.log(products.category)
        // console.log(products.thumbnail)
        // console.log(products.images)


    });
});


// ppi


// use-it-to-make-data => jsonplaceholder OR => jsonformatter