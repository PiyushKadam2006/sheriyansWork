let formDiv = document.querySelector(".formDiv");
let creatbtn = document.querySelector("#create-form");
let closebtn = document.querySelector("#closeForm");
let cardcontainer = document.querySelector(".card-container");

formDiv.style.display = "none";
let cardArr = [];
let form = document.querySelector("form");

let indexOfCurrentUpdate ;
let cardForUpdate = false

let renderUI = () => {
  cardcontainer.innerHTML = ""; ///this line is very important to prevent duplication of array cars

  cardArr.forEach((value, index) => {
    cardcontainer.innerHTML += `
    <div class="card-profile">
        <div class="img">
          <img
            src="${value.url}"
            alt="brokenRobotImage"
            id="profile-img"
          />
        </div>
        <p id="profile-name">${value.name}</p>
        <p id="profile-email">${value.email}</p>
        <div class="btns">
            <button id="update" onclick="updateCard(${index})">Update</button>
            <button id="delete" onclick="deleteCard(${index})">Delete</button>
        </div>
      </div>`;
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = form[0].value;   //create+read 
  let email = form[1].value;
  let url = form[2].value;

  let userObj = { name, email, url };


  if(cardForUpdate){
      cardArr[indexOfCurrentUpdate]= userObj;
      cardForUpdate = false;
      cardForUpdate= null;
  }else{
      cardArr.push(userObj);
      console.log(cardArr);
  }
  renderUI();

  form.reset();

  formDiv.style.display = "none";
});

creatbtn.addEventListener("click", () => {
  formDiv.style.display = "flex";
});

closebtn.addEventListener("click", () => {
    form.reset()
  formDiv.style.display = "none";
});


let deleteCard = (index)=>{
    cardArr.splice(index,1);
    renderUI();
}

let updateCard = (index)=>{
    indexOfCurrentUpdate = index;
    cardForUpdate = true;
    let userForUpdate = cardArr[index];
    formDiv.style.display="flex";

    form[0].value = userForUpdate.name;
    form[1].value = userForUpdate.email;
    form[2].value = userForUpdate.url;

}