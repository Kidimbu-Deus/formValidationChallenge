let submitBtn = document.getElementById("submit")

    submitBtn.onclick = function (e) {

    e.preventDefault()

    let validated = true;

    let newTask = document.getElementById("newTask")

    let taskErr = document.getElementById("newTaskErr")

    if (newTask.value.includes('<') || newTask.value.includes('>') || newTask.value == "") {

        taskErr.style.visibility = "visible"
        taskErr.style.color="red";

        validated = false
        
    } else {
        
        newTaskErr.style.visibility = "hidden"
    }
    
    let list = document.createElement("li");
    let textNode = document.createTextNode(document.getElementById("newTask").value);
    list.appendChild(textNode);
    document.getElementById("myNewTaskList").appendChild(list);
    
}