const $inputTodo = document.querySelector('.inputTodo');
const $newtask = document.querySelector('.new-task');
const $ul = document.querySelector('ul');


function createTodoItem(text) {
    const li = document.createElement('li');
    li.classList.add('todo');

    const div = document.createElement('div');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = '×';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('toggle-checked');

    const span = document.createElement('span');
    span.classList.add('text');
    span.textContent = text;

    div.appendChild(deleteBtn);
    div.appendChild(checkbox);
    div.appendChild(span);

    li.appendChild(div);

    return li;
}

$newtask.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = $inputTodo.value.trim();

    if (text !== '') {
      const li = createTodoItem(text);
      $ul.appendChild(li);
      $inputTodo.value = '';
    }
});

$ul.addEventListener('click', (event) => {
    const {target} = event;

    if (target.classList.contains('delete')) {
      const listItem = target.closest('.todo');
      $ul.removeChild(listItem);
    } else if (target.classList.contains('toggle-checked')) {
      const listItem = target.closest('.todo');
      listItem.classList.toggle('completed');
    }
});


