document.addEventListener("DOMContentLoaded", () => {
  // your code here

let text = document.querySelector('input')
let form = document.querySelector('form')
form.addEventListener('submit', (e) =>{
  e.preventDefault()
  addTodo(e.target['new-task-description'].value)
  form.reset()
})
});

function addTodo(updatelist){
let li = document.createElement('li')
let btn = document.createElement('button')
btn.textContent = 'delete'
btn.addEventListener('click', deleteList)
li.textContent = `${updatelist}  `
document.querySelector('#list').appendChild(li)
li.appendChild(btn)

}

function deleteList(e){
e.target.parentNode.remove()
}

