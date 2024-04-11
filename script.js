/*-----menu function--------*/
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}

/*---------seacrh function----------*/

let searchBtn = document.querySelector('.searchBtn');

let closeBtn = document.querySelector('.closeBtn');

let seacrhBox = document.querySelector('.searchBox');
searchBtn.onclick = function () {
    seacrhBox.classList.add('active')
    closeBtn.classList.add('active')
    searchBtn.classList.add('active')
}
closeBtn.onclick = function () {
    seacrhBox.classList.remove('active')
    closeBtn.classList.remove('active')
    searchBtn.classList.remove('active')
}
/*-----------menu title function-----------*/
/*
const menuTitle = document.querySelector(".menu-title");
menuTitle.addEventListener("click", function (x) {
    if (x.target.classList.contains("menu-button")) {
        const Target = x.target.getAttribute("data-title");
        menuTitle.querySelector(".active").classList.remove("active");
        x.target.classList.add("active");

        const menuItem = document.querySelector(".menu");
        menuItem.querySelector(".menu-item-content.active").classList.remove("active");
        menuItem.querySelector(Target).classList.add("active")
    }
})
*/
/*------search item funtion-----*/
/*
const search = () => {
    const seacrhbox = document.getElementById("search-item").value.toUppercase();
    const storeitems = document.getElementById("Products-list")
    const product = document.querySelectorAll(".row .col-4")
    const pname = storeitems.getElementsByTagName("h4")
    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h4')[0];
        if (match) {
            let textvalue = match.textContent || match.innerHTML
            if (textvalue.toUpperCase().indexOf(seacrhbox) > -1) {
                product[i].style.display = "";
            }
            else {
                product[i].style.display = "none";
            }

        }
    }
}
*/