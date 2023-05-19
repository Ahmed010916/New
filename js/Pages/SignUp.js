
var animtion = document.getElementById("animtion");

var page_client = document.getElementById("page_client");
var page_brand = document.getElementById("page_brand");

var client = document.getElementById("client").addEventListener('click',()=>{
    animtion.classList.remove("active");
    Page("client");
});

var brand = document.getElementById("brand").addEventListener('click',()=>{
    animtion.classList.add("active");
    Page("brand");
});


function Page(page) {
    if (page === "client") {
        page_client.style.display = "flex";
        page_brand.style.display = "none";
    } else {
        page_client.style.display = "none";
        page_brand.style.display = "flex";
    }
}