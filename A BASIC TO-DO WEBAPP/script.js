const addBtn = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

loadTasks();

function addTask(){
    const task = taskInput.value.trim();

    if (task) {
        createTaskElement(task);
        taskInput.value = "";
        saveTasks();
    }else{
        alert("You haven't entered anything, please enter a task..");
    }
}

addBtn.addEventListener("click", addTask);

function createTaskElement(task){
    const completedTasks = document.querySelector(".completedTasks");
    const listItem = document.createElement("li");
    listItem.textContent = task;
    taskList.appendChild(listItem);
    

    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const checkBtn = document.createElement("button");
    

    editBtn.textContent = "edit";
    deleteBtn.textContent= "delete";
    checkBtn.textContent = "complete";
    

    editBtn.style.backgroundColor = "white";
    editBtn.style.borderRadius = "5px";
    editBtn.style.border = "0";
    editBtn.style.float = "right";
    editBtn.style.padding = "5px";
    editBtn.style.height = "23px";
    editBtn.style.marginRight = "5px";
    editBtn.style.marginTop = "-28px";

    checkBtn.style.backgroundColor = "LightGreen";
    checkBtn.style.borderRadius = "5px";
    checkBtn.style.border = "0";
    checkBtn.style.float = "right";
    checkBtn.style.padding = "5px";
    checkBtn.style.height = "23px";
    checkBtn.style.marginRight = "5px";

    deleteBtn.className = "deleteButton";
    deleteBtn.style.backgroundColor = "Orange";
    deleteBtn.style.borderRadius = "5px"
    deleteBtn.style.border = "0"
    deleteBtn.style.float = "right"
    deleteBtn.style.padding = "5px"
    deleteBtn.style.marginRight = "40px"
    deleteBtn.style.height = "23px"

    listItem.appendChild(deleteBtn);
    listItem.appendChild(checkBtn);
    listItem.appendChild(editBtn);
    taskList.appendChild(listItem);
    deleteBtn.addEventListener("click", function(){
    taskList.removeChild(listItem);
    saveTasks();
    });
    checkBtn.addEventListener("click", function(){
                const parent = this.parentNode;
                parent.remove();
                completedTasks.appendChild(parent);
                checkBtn.style.display = "none";
                editBtn.style.display = "none";
                saveTasks();
            })

    deleteBtn.addEventListener("click", function(){
                const parent = this.parentNode;
                parent.remove();
                editBtn.style.display = "none";
            })

            editBtn.onclick = function(){
                listItem.contentEditable = true;
                listItem.focus();
            }
            taskList.appendChild(editBtn);
            listItem.onblur = function(){
                listItem.contentEditable = false;
                task[task.indexOf(item)]= listItem.textContent;
                // saveTasks();
            }
            

}

function saveTasks(){
    let tasks = [];
    taskList.querySelectorAll("li").forEach(function(item){
        tasks.push(item.textContent.replace("delete", "").replace("complete","").replace("edit","").trim());
        
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(createTaskElement);
}