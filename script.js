const addtask = document.getElementById('addtask');
const submit = document.getElementById('submit');
const alltasks = document.getElementById('alltasks');

submit.addEventListener('click',()=>{
    const task = addtask.value;
    if(!task){
        alert('Enter a Task!');
        return;
    }
    alltasks.innerHTML += `
        <label class="my-2 flex items-center space-x-2">
            <input type="checkbox" name="task1" id="task1">
            <span class="w-[21vw] ">${task}</span>
            <button id="delete" class="border-2 text-black bg-yellow-600 rounded-xl px-2" type="delete">Delete</button>
        </label>
    `;
    addtask.value = '';
});

alltasks.addEventListener('click',(e)=>{
    if(e.target.tagName=='BUTTON'){
        const deletetask = e.target.parentElement;
        deletetask.remove();
    }
});