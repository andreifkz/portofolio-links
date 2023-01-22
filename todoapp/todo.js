const submitBtn = document.getElementById('submit-btn');
const clearBtn = document.getElementById('clear-btn');
const textBox = document.getElementById('input-value');
const container = document.getElementById('container');
const ul = document.getElementById('list')

function addTask(){
  if (textBox.value === null || textBox.value === ""){
    alert('Empty task, please provide a task')
  } else{
    const listItem = document.createElement('li');
    listItem.innerHTML = textBox.value;
    ul.appendChild(listItem);
  }
}

function removeInputValue(){
  textBox.value === null  ;
}

submitBtn.addEventListener('click', addTask)
submitBtn.addEventListener('click', removeInputValue)

function removeAllTasks(){
  while(ul.hasChildNodes()){
    ul.removeChild(ul.firstChild)
  }
}
clearBtn.addEventListener('click', removeAllTasks )
