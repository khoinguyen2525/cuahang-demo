// Đọc dữ liệu từ tệp JSON (ví dụ: products.json)

fetch('products.json')
    .then(response => response.json())
    .then(products => {
        const productsContainer = document.getElementById('products');
        products.data.forEach(product => {
            //create card
            let card = document.createElement('div');
            //Card should have category and should stay hidden initially
            card.classList.add("card", product.category, "hide");

            let imgContainer = document.createElement("div");
            imgContainer.classList.add("image-container");

            let image = document.createElement('img');
            image.src = product.image;
            imgContainer.appendChild(image);
            card.appendChild(imgContainer);

            //container
            let container = document.createElement("div");
            container.classList.add("container-p");

            let name = document.createElement('h5');
            name.classList.add("product-name");
            name.innerText = product.productName.toUpperCase();
            container.appendChild(name);

            let price = document.createElement('p');
            price.textContent = `Price: ${product.price}` + "VND";
            container.appendChild(price);

            card.appendChild(container);
            document.getElementById("products").appendChild(card);
        });
    })
    .catch(err => console.error('Error fetching products:', err));

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
});

//Initially display all products
window.onload = () => {
    filterProduct("all");
};
