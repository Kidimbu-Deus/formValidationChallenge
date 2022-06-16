let subimtButton = document.getElementById("submt") 

subimtButton.onclick = function myValidation() {

    let newTask = document.getElementById("newTask").value

    if (newTask.value.includes("<" + ">")) {

    document.getElementById("newTaskErr").style.display = "block";  
}
    
}