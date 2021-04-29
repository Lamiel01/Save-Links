// selectors
const urlInput = document.querySelector('.input-url');
const titleInput = document.querySelector('.input-title');
const addButton = document.querySelector('.add-button');

// Event listeners
addButton.addEventListener('click', addElm);

// Functions
function addElm(event){
    // Prevent form from submitting
    // event.preventDefault():
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // li url
    const newURL = document.createElement('li');
    newURL.innerText = 'hey';
    newURL.classList.add('link');
    todoDiv.appendChild(newURL);
    // li title
    const newTitle = document.createElement('li');
    newTitle.innerText = 'hey';
    newTitle.classList.add('title');
    todoDiv.appendChild(newTitle);
    // checked mark button
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas></i>';
    editButton.classList.add('edit-btn');
    todoDiv.appendChild(editButton);
    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas></i>';
    trashButton.classList.add('edit-btn');
    todoDiv.appendChild(trashButton);
}
