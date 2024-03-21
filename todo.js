let todoList=[];

if (localStorage.getItem('Task')) {
  todoList = JSON.parse(localStorage.getItem('Task'));
  displayItems();
}

function addToDo(){
  let inputElement=document.querySelector('#todo-input');
  let dateElement=document.querySelector('#todo-date');
  let todoDate=dateElement.value;
  let todoItem=inputElement.value;
  todoList.push({item:todoItem,dueDate:todoDate});
  inputElement.value='';
  dateElement.value='';
  
  // Save updated task list to localStorage
  localStorage.setItem('Task', JSON.stringify(todoList));

  displayItems();
}

function displayItems(){
  let containerElement=document.querySelector('.todo-container');
  let newHTML=`<h5>Task</h5> <h5>Due Date</h5> <h5> </h5>`;
  for(let i=0;i<todoList.length;i++){
    //let item=todoList[i].item;
    //let dueDate=todoList[i].dueDate;
    let {item,dueDate}=todoList[i];
    newHTML+=`
              <span>${item}</span>
              <span>${dueDate}</span>
              <button class='btn-delete' onclick="todoList.splice(${i}, 1);

              
              localStorage.setItem('Task', JSON.stringify(todoList));
          
              displayItems();">Delete</button>
              `;
  }
   containerElement.innerHTML=newHTML;
  
}