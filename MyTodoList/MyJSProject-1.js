const addTask = document.querySelector('.addItem');
const btnAdd = document.querySelector('.btnADD');
const listTask = document.querySelectorAll('.taskList');
const removeTask = document.querySelectorAll('.btnRemove');
const editTask = document.querySelectorAll('.btnEdit');
const elementoPai = document.querySelector('.taskListContainer');

btnAdd.addEventListener('click', function () {
    const resultTask = addTask.value;

    if (resultTask === '') {
        alert('Informe uma task!');
        return;
    }

    const newBtn = document.createElement('div');
    newBtn.classList.add('taskList');

    const actionsBtn = document.createElement('div');
    actionsBtn.classList.add('actionsContainer');
    actionsBtn.style.display = 'flex';
    actionsBtn.style.gap = '15px';
    actionsBtn.style.width = '169px';
    actionsBtn.style.paddingLeft = '12px';

    const checkIcon = document.createElement('span');
    checkIcon.style.padding = '10px';
    checkIcon.innerHTML = `<svg width="25" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="20 6 9 17 4 12"></polyline>
</svg>`;
    newBtn.appendChild(checkIcon);

    const newSpan = document.createElement('span');
    newSpan.textContent = addTask.value;
    newBtn.appendChild(newSpan);

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.classList.add('btnRemove');
    deleteBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>`;
    actionsBtn.appendChild(deleteBtn);

    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.classList.add('btnEdit');
    editBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>`;
    actionsBtn.appendChild(editBtn);

    newBtn.appendChild(actionsBtn);
    elementoPai.appendChild(newBtn);
    addTask.value = '';

    deleteBtn.addEventListener('click', function () {
        newBtn.textContent = '🗑️ Excluindo...';
        newBtn.style.color = '#720a0a';
        setTimeout(function () {
            newBtn.remove();
        }, 1300);
    });

    editBtn.addEventListener('click', function () {
        let novoTexto = prompt('Digite o novo texto..');

        if (novoTexto === null) {
            alert('Informe um novo texto!');
            return;
        }
        newSpan.textContent = novoTexto;
    });
});