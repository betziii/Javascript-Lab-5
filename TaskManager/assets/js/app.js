const taskinput = document.querySelector('#task');
const  form = document.querySelector('#task-form');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
/*const li = document.createElement('li');
li.className = "collection-item";
li.id = 'new-item';
li.setAttribute('title','New-Item');
const txt = document.createTextNode('Hello World');
li.appendChild(txt);
*/

form.addEventListener('submit',addNewTask);
clearBtn.addEventListener('click', clearAllTasks);
filter.addEventListener('keyup', filterTasks);
taskList.addEventListener('click', removeTask);
function addNewTask(e){
    if(taskinput.value ===''){
        taskinput.style.borderColor = "red";
        return;
    }
    const li = document.createElement('li');
    li.className = "collection-item";
    li.appendChild(document.createTextNode (taskinput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    
    e.preventDefault();
}

function clearAllTasks(){
    //alert("Clear task...");
    //taskList.innerHTML = '';
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
   }

}
function filterTasks(e){
    console.log("Task Filter...");
}
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure about that?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}
