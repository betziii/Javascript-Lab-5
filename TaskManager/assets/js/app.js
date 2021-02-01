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
    e.preventDefault();
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
    taskinput.value = ''
}

function clearAllTasks(){
    //alert("Clear task...");
    //taskList.innerHTML = '';
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
   }

}
/*
function filterTasks(e){
    let list1 = document.querySelectorAll(".collection-item");
    list1.forEach(filt);
}
function filt(item){
  let txtValue = item.toString();
  if (txtValue.toLowerCase().indexOf(filter.value.toLowerCase()) > -1) {
    item.style.display = txtValue;
  } else {
    item.style.display = "none";
  }
}*/
function filterTasks(e) {
  let filter = (e.target)
  console.log(filter)
  let collections = document.querySelectorAll('.collection-item');
  console.log(collections)
  collections.forEach(element => {
      element.style.display = (element.textContent.toUpperCase().indexOf(filter.value.toUpperCase()) > -1) ? 'block' : 'none';
  });
}
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure about that?')){
            e.target.parentElement.parentElement.remove();
        }
    }
}
/*  
    Instruction for Handling the Search/filter 
    
    1. Receive the user input from the text input 
    2. Assign it to a variable so the you can reuse it 
    3. Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
    4. Iterate over the collection item Node List using forEach
    5. On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
    6 . If it contains , change the display property of the element as block , else none
    
*/
//let search = document.getElementById("#filter");
/*
const list1 = document.querySelectorAll(".collection-item");
//search.addEventListener('keyup',searchFun);
function searchFun(search){
    search = search.toLowerCase();
    list1 = list1.toLowerCase();
    const filtered = list1.filter(list1.forEach(element => {
        return element.name.includes(search); 
    }));
    console.log(filtered);
}
input = document.getElementById('#filter').t;
console.log(input);
function searchFilter(input) {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    
    filterss = input.value.toUpperCase();
    ul = document.getElementById(".collection");
    li = ul.getElementsByTagName('.collection-item');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      txtValue = li[i].textContent;
      console.log(txtValue);
      //txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filterss) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("li")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    
    }
  }
  */