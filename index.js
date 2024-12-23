let addBtn=document.querySelector(".add-btn");
let taskPlace=document.querySelector(".task-inputer");
let taskListMenu=document.querySelector(".task-list");
addBtn.addEventListener("click", ()=>{
    let taskItem=document.createElement("li");
    taskItem.style.listStyle="none"
    taskItem.innerHTML=`${taskPlace.value}<i  class="fa-solid fa-xmark delete-icon"></i>`
    taskListMenu.appendChild(taskItem);
    taskPlace.value="";
    taskItem.style.display="flex";
    taskItem.style.alignItems="center";
    taskItem.style.justifyContent="space-between";
    taskItem.querySelector(".delete-icon").addEventListener("click", (event)=>{
        taskItem.remove();
    })
})
