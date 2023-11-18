const input = document.getElementById('button')
function addingEventListener() {
    alert('Button was clicked!')
    input.addEventListener('click', addingEventListener)

}



