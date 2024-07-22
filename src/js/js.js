const login = async () => {
    const response = await fetch("http://localhost:5199/api/Users", {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({email:'sefaaksu@gmail.com', password: 'sefa123'})
    });

    const result = await response.json();
    localStorage.setItem("token", JSON.stringify(result.token));
}

const getProducts = async () => {
    const parent = document.getElementById("productId");
    parent.value = ''; 
    const response = await fetch("http://localhost:5199/api/products");
    const products = await response.json();
    console.log(products);
    displayProduct(products);
}

const displayProduct = (products) => {
    const parent = document.getElementById("divProducts");
    parent.innerHTML = ''; 

    products.forEach(prd => {
        parent.innerHTML += `
            <div>
             <h5>${prd.productName}</h5>
             <p>${prd.productAmount}</p>
            </div>
        `;
    });
}