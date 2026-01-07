const input = document.getElementById("input");
const create = document.getElementById("create");
const list = document.getElementById("taskList")

create.addEventListener("click", (e) => {
    const li = document.createElement("li");
    li.textContent = input.value;

    const rm = document.createElement("button");
    rm.textContent = "X";
    rm.style.marginLeft = "10px";
    rm.onclick = "rmClick()"

    rm.addEventListener("click", (e) => {
        li.remove();
    })

    li.append(rm);
    list.append(li);

    input.value = "";
})

input.addEventListener("keydown", (e) => {
    if (e.key == "Enter"){
        create.click();
    }
})