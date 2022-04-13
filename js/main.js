let pars = document.querySelector(".pars");
let listUl = document.querySelector(".list");
pars.onclick = () => {
    listUl.classList.toggle("active");
}

// ---------- Start Items
let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 1;

loadMoreBtn.onclick = () => {
    boxes = document.querySelectorAll(".container_f .box");
    for(var i=currentItem; i < currentItem + 1; i++){
        boxes[i].style.display = "grid";
    }
    currentItem += 1;
    if(currentItem >= boxes.length){
        loadMoreBtn.style.display = "none";
    }
}