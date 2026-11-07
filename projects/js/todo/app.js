/**
 * let input = document.querySelector(".input-task");
let btns = document.querySelector(".add-task");
let container = document.querySelector(".list-container");

let taskarr = [];

btns.addEventListener("click",()=>{
    let inputVal = input.value;
    //yaha + operater is having imprtant role

    if(inputVal.trim()=== ""){
        alert('please enter the task .');
        return;
    }
    taskarr.push(inputVal);
    console.log(taskarr);
    container.innerHTML += `<div class="inner-div">
            <p class="taskname">${inputVal}</p>
            <div class="btns">
                <button id="completed">done</button>
                <button id="delete">delete</button>
            </div>
            </div>
        `
        input.value ="";
})
*/

/**
 * Todo List Project – Part 2
 */

let input = document.querySelector(".input-task");
let btns = document.querySelector(".add-task");
let container = document.querySelector(".list-container");

let taskarr = [];

let renderUI = () => {
  taskarr.forEach((val, index) => {
    container.innerHTML += `<div class="inner-div">
            <p class="taskname"  
            style="text-decoration : ${
                val.isCompleted ? "line-through" : "none"
                };">${val.task}</p>
            <div class="btns">
                <button id="completed"
                onclick="completeTask(${index})"
                >done</button>
                <button id="delete" onclick="deleteTask(${index})">delete</button>
            </div>
            </div>
        `;
  });
};

btns.addEventListener("click", () => {
  let inputVal = input.value;
  //yaha + operater is having important role

  if (inputVal.trim() === "") {
    alert("please enter the task .");
    return;
  }
  //   taskarr.push(inputVal);
  //   console.log(taskarr);
  taskarr.push({
    task: inputVal,
    isCompleted: false,
  });

  container.innerHTML = "";

  renderUI();
  input.value = "";
});
//events =>inline html events
// let deleteTask = [];

let deleteTask = (index) => {
  // console.log(taskarr[index]);
  taskarr.splice(index, 1);

  container.innerHTML = "";

  renderUI();
};

let completeTask = (index) => {
  taskarr[index].isCompleted = !taskarr[index].isCompleted;

  container.innerHTML = "";
  renderUI();
};
