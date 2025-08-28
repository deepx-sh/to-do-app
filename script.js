let ip = document.querySelector(".input-box");
let listContainer = document.querySelector(".list-container");

let addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", () => {
    if (ip.value === '' || ip.value.trim()==='') {
        alert("You must write something!");
        return;
    }
    else {
        let li = document.createElement("li");
        li.textContent = ip.value;
        listContainer.appendChild(li);
        let delBtn = document.createElement("button");
        delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        li.appendChild(delBtn);
    }
    ip.value = '';
});

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
    } else if (e.target.tagName === "BUTTON" || e.target.parentElement.tagName==="BUTTON") {
        const li = e.target.closest("li");
        li.remove();
    }
    
})