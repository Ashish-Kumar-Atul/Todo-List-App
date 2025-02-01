document.addEventListener('DOMContentLoaded', () => {
    const addtask = document.getElementById('addtask');
    const submit = document.getElementById('submit');
    const alltasks = document.getElementById('alltasks');
    let taskCount = 0;

    submit.addEventListener('click', () => {
        const task = addtask.value;
        if (!task) {
            alert('Enter a Task!');
            return;
        }

        taskCount++;
        alltasks.innerHTML += `
            <label class="my-2 flex items-center space-x-2">
                <input type="checkbox" class="task-checkbox" name="task${taskCount}" id="task${taskCount}">
                <span class="w-[21vw] ">${task}</span>
                <button class="delete border-2 text-black bg-yellow-600 rounded-xl px-2" type="button">Delete</button>
            </label>
        `;
        addtask.value = '';
    });

    addtask.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            const task = addtask.value;
            if (!task) {
                alert('Enter a Task!');
                return;
            }

            taskCount++;
            alltasks.innerHTML += `
                <label class="my-2 flex items-center space-x-2">
                    <input type="checkbox" class="task-checkbox" name="task${taskCount}" id="task${taskCount}">
                    <span class="w-[21vw] ">${task}</span>
                    <button class="delete border-2 text-black bg-yellow-600 rounded-xl px-2" type="button">Delete</button>
                </label>
            `;
            addtask.value = '';
        }
    });

    alltasks.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            const deletetask = e.target.parentElement;
            deletetask.remove();
        }
        if (e.target.classList.contains('task-checkbox')) {
            const taskText = e.target.nextElementSibling;
            alltasks.style.backgroundColor = "green";
        }
    });
});
