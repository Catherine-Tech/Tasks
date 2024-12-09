document.addEventListener("DOMContentLoaded",()=> {
    const submit = document.getElementById('submit');
    const newTask = document.getElementById('newTask');

    
    submit.disabled = true;

    newTask.addEventListener('input', function() {
        submit.disabled = !newTask.value.trim();
    });

    document.getElementById('taskForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const taskText = newTask.value.trim();
        if (taskText) {

        const singleTaskItem = document.createElement('li');
        singleTaskItem.textContent = taskText;

        document.getElementById('tasks').append(listItem);

        newTask.value = '';
        submit.disabled = true;
    }

        return false;
    });
});
