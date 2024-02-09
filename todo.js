 
// const asd = document.querySelector('.List');
// console.log(asd.value);
// console.log("asd");
const ToDoArray = [];


function store(){
    let ans = "";
    for(let i = 0; i < ToDoArray.length; i++){
    let number = i;
    let first = ToDoArray[i];
    let second = `<p class = "namba"> ${number}. ${first} <button onclick = "remove(${i}); store();">Delete</button> </p>`
    ans += second;
    document.querySelector('.task').innerHTML = ans;
    set();
    }
}

function set() {
    localStorage.setItem('ToDoArray', JSON.stringify(ToDoArray));
}

const storedTasks = JSON.parse(localStorage.getItem('ToDoArray'));
    for (const task of storedTasks) {
        ToDoArray.push(task);
        store();
    }

function remove(num) {
    ToDoArray.splice(num,1);

}

function add(){
    const todoList = document.querySelector('.List');
    ToDoArray.push(todoList.value);
    todoList.value = '';
    store();
}

function edit(){
    const NUM1 = document.querySelector('.Edit');
    const NUM2 = parseInt(NUM1.value);
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'EDIT TASK';
    newInput.classList.add('EditReplacement');
    document.body.appendChild(newInput);

        newInput.addEventListener("keydown", function(event) {
            if (event.key === 'Enter'){
                for (let i = 0; i < ToDoArray.length; i++) {
                    if (i === NUM2) {
                        ToDoArray[i] = `${newInput.value}`;
                    }
                }
        document.body.removeChild(newInput);
        NUM1.value = '';
        store();

            }
        });

    }
    
   
