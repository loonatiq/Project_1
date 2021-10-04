const toDoList = document.querySelector('#tdl');
const tBox = document.getElementById('newThing');
document.getElementById('addBtn').onclick = addNew;

function addNew(){
  let inputValue = tBox.value;
  const thing = document.createElement('li');
  thing.textContent = inputValue;
  toDoList.append(thing);
  tBox.value = '';
}

