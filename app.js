var form = document.getElementById('add-item');
var input = document.getElementById('input');
var list = document.getElementById('list');

// Functions keep our code DRY (Don't Repeat Yourself)
function addTodo(event) {
  // Stop the default action
  event.preventDefault();

  var item = input.value;
  // Clear the form
  form.reset();

  // Put the user input into a list item
  list.innerHTML += '<li>' + item + '</li>';
}

// Event Listeners do something when something is clicked, hovered, etc.
form.addEventListener('submit', addTodo);