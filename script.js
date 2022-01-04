
const inputBox = document.querySelector('.inputField input')
const addBtn = document.querySelector('.inputField button')
const todoList = document.querySelector('.todoList')
const deleteAll = document.querySelector('.footer button')

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if (userData.trim() != 0){ //Se o input não tiver apenas espaços " "
        addBtn.classList.add('active') //adcionar class active no botão
    } else {
        addBtn.classList.remove('active') //remover class active do botão
    }
}
showTasks()

addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem('New Todo') //adcionar um item no localStorage
    if (getLocalStorage == null){ // Se não tiver nada no localStorage
        listArr = [] // Cria um array vazio
    } else {
        listArr = JSON.parse(getLocalStorage) // trasformar um json string em objeto javaScript
    }
    listArr.push(userData)
    localStorage.setItem('New Todo', JSON.stringify(listArr)) //trasformar um objeto javaScript em json string
    showTasks()
}

// função de adicionar Task list
function showTasks() {
    let getLocalStorage = localStorage.getItem('New Todo') //adcionar um item no localStorage
    if (getLocalStorage == null){ // Se não tiver nada no localStorage
        listArr = [] // Cria um array vazio
    } else {
        listArr = JSON.parse(getLocalStorage) // trasformar um json string em objeto javaScript
    }

    const pandingNumb = document.querySelector('.pandingNumb')
    pandingNumb.textContent = listArr.length;
    let newLiTag = ''
    listArr.forEach((element, index) => {
        newLiTag += `<li>${element} <span onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag
    inputBox.value = ""; // O input vai ficar vazio depois de postar a Task
}

// função de remover Task list
function deleteTask(index){
    let getLocalStorage = localStorage.getItem('New Todo') //adcionar um item no localStorage
    listArr = JSON.parse(getLocalStorage) // trasformar um json string em objeto javaScript
    listArr.splice(index, 1) //delete ou remover o index especifico
    
    // após remover o li vai fazer update no local storage
    localStorage.setItem('New Todo', JSON.stringify(listArr)) //trasformar um objeto javaScript em json string
    showTasks()
}

//deletar todas as Tasks
deleteAll.onclick = () => {
    listArr = [];

    // após remover o li vai fazer update no local storage
    localStorage.setItem('New Todo', JSON.stringify(listArr)) //trasformar um objeto javaScript em json string
    showTasks()
}