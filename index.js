// Add to to-do element on click or enter with form 
var form = document.querySelector('form')

// Need array for tests to register multiple todos?
// var tasks = [] ?

// Save user-entered data
form.onsubmit = function(e) {
    e.preventDefault()
    var input = document.querySelector('input')
    console.log(input.value)
    var task = input.value
    // Cannot enter spaces
    if(task.trim().length === 0) {
        return
    }  
    // Clear submission line
    form.reset()
    // Make list
    taskList = document.createElement('li')
    taskButton = document.createElement('button')
    var list = document.getElementById("todo-list")
    list.appendChild(taskList)
    taskList.appendChild(taskButton)
    // Make bullet points show input
    taskButton.textContent = task
    // Strike through
    taskButton.onclick = function(e) {
        e.target.parentElement.style.textDecoration = 'line-through'
        // Remove on second click
        e.target.onclick = function(e) {
        e.target.parentElement.remove()
        }
    }
}