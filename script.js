let ip = document.querySelector(".input-box");
let listContainer = document.querySelector(".list-container");

let addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", () => {
    if (ip.value === '') {
        alert("You must write something!");
        return;
    }
    else {
        let li = document.createElement("li");
        li.textContent = ip.value;
        listContainer.appendChild(li);
    }
})