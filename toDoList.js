//Justifing Const
const toDoList = document.querySelector('#tdl');
const tBox = document.querySelector('#newThing');

//Event Handler
document.querySelector('#addBtn').addEventListener('click', addNew);
document.querySelector('#addBtn').addEventListener('keydown', function(){
  if(keyCode === '13'){
  }
});

//Functions
//내용 있을 시 리스트 추가 가능
function addNew(){
  if(tBox.value !== ''){
  let inputValue = tBox.value;
  const thing = document.createElement('li');
  thing.textContent = inputValue;
  toDoList.append(thing);
  tBox.value = '';}
}

