/*This file provides an extra functionality (not required in the lab) to the task list page. Nothing will be
  posted or saved to any server, but the "look" of user interaction is achieved, which is a good exercise for
  me to simple js coding.
 */

function pageLoad () {
    //get ID's of elements representing buttons to use them in events
    var saveBtn = document.getElementById("save-task");
    var clearBtn = document.getElementById("clear-task");
    //registering actions of the save and clear buttons
    saveBtn.onclick = saveTask;
    clearBtn.onclick = clearTask;
}
//execute the function above when the window loads
window.onload = pageLoad;

//to be executed when the save button is clicked
function saveTask () {
    //get items handles then use them in the user interaction
    var taskDesc = document.getElementsByName("task")[0].value;
    var taskDate = document.getElementsByName("requiredBy")[0].value;
    var cat = document.getElementsByName("category")[0].value;
    //validate if input fields aren't empty
    if(taskDesc==="" || taskDate===0 || taskDate==="") {
        alert("Nothing scheduled to be saved.")
    } else {
        if (confirm("The following task will be added to your task list:\n" +
            "Task: " + taskDesc + "\n" + "Required by: " + taskDate + "\n" +
            "Category: " + cat)) {
            alert("Task saved successfully.");
        } else {
            alert("Task not saved...");
        }
    }
}

//to be executed when the clear button is clicked
function clearTask () {
    if (confirm("Are you sure you want to clear the current task?")) {
        document.getElementsByName("task")[0].value="";
        document.getElementsByName("requiredBy")[0].value="";
        document.getElementsByName("category")[0].value="";
        alert("Task cleared.");
    }
}