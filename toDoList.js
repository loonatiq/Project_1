//Justifing Const
const toDoList = document.querySelector('#tdl');
const tBox = document.querySelector('#newThing');
const things = toDoList.children;

//Event Handler
// 1. 내용 추가
document.querySelector('#addBtn').addEventListener('click', addNew);
document.querySelector('#newThing').addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    addNew();
  }
});

//Functions
// 1. 내용 있을 시 리스트 추가 가능
function addNew(){
  if(tBox.value !== ''){
  let inputValue = tBox.value;
  const thing = document.createElement('li');
  thing.textContent = inputValue;
  toDoList.append(thing);
  tBox.value = '';
// 1-1. 리스트 완료 표시
for(let i = 0; i < things.length; i++){
  things[i].addEventListener('click', done);
}
}
}

// 2. 리스트 완료 표시
function done(event){
  this.classList.toggle('done');
}


