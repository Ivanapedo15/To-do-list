const inputField = document.getElementById("input-field");
const taskList = document.getElementById("task-list");


inputField.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        addToList()
    }
})


function addToList(){
    if (inputField.value !== ''){
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputField.value = "";
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false)