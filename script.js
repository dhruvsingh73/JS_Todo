let addBtn = document.getElementById("add-btn");
addBtn.addEventListener('click', addTodo);
let parentList = document.getElementById("parent-list");

function addTodo(e) {

    let currentTask = document.getElementById("task");
    let currentTaskValue = currentTask.value;


    if (currentTaskValue !== "" && parentList.children[0].className == "emptyMsg") {
        parentList.children[0].remove();

        let newLi = document.createElement('li');
        newLi.className = ("list-group-item d-flex justify-content-between");
        newLi.innerHTML = `<h3 class="flex-grow-1">${currentTaskValue}</h3>
              <button id="add-btn" class="btn bg-warning mx-3" type="button" onclick="editTodo(this)">Edit</button>
              <button id="add-btn" class="btn bg-danger" type="button" onclick="removeTodo(this)">Remove</button>`

        parentList.appendChild(newLi);
        currentTask.value = "";
    }
    
}

function removeTodo(element) {
    element.parentElement.remove();
    if (parentList.children.length <= 0) {
        let emptyMsg = document.createElement("h3");
        emptyMsg.textContent = "Please add a todo";
        emptyMsg.style.textAlign = "center";
        emptyMsg.classList.add("emptyMsg");
        parentList.appendChild(emptyMsg);
    }
}

function editTodo(element) {
    if (element.textContent == "Edit") {
        element.textContent = "Done";
        let currentTodo = element.previousElementSibling.textContent;
        let changeArea = document.createElement('input');
        changeArea.type = "text";
        changeArea.className = "form-control";
        changeArea.placeholder = "Todo";
        changeArea.value = currentTodo;
        element.parentElement.replaceChild(changeArea, element.previousElementSibling);
    }
    else {
        element.textContent = "Edit";
        let currentTodo = element.previousElementSibling.value;
        let heading = document.createElement('h3');
        heading.className = "flex-grow-1";
        heading.textContent = currentTodo;
        element.parentElement.replaceChild(heading, element.previousElementSibling);
    }

}