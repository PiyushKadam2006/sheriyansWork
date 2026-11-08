let hrs = document.querySelector("#hrs");
let mins = document.querySelector("#mins");
let secs = document.querySelector("#secs");
let milisecs = document.querySelector("#milisecs");

let strbtn = document.querySelector("#strbtn");
let stpbtn = document.querySelector("#stpbtn");
let rstbtn = document.querySelector("#rstbtn");

let Houretime = 0;
let Minutetime = 0;
let Secondtime = 0;
let Militime = 0;

let interval;
strbtn.addEventListener("click", () => {
  interval = setInterval(() => {
    Militime++;
    milisecs.textContent = Militime;
    if (Militime === 1000) {
      Militime = 0;
      if (Secondtime === 60) {
        Secondtime = 0;
        if (Minutetime === 60) {
          Minutetime = 0;
          if (Houretime === 12) {
            Houretime = 0;
          }
          Houretime++;
          hrs.textContent = Houretime;
        }
        Minutetime++;
        mins.textContent = Minutetime;
      }
      Secondtime++;
      secs.textContent = Secondtime;
      console.log(Secondtime);
    }
  }, 10);

  strbtn.disabled = true;
});

stpbtn.addEventListener("click", () => {
  clearInterval(interval);
  strbtn.disabled = false;
});

rstbtn.addEventListener("click", () => {
  Houretime = 0;
  Minutetime = 0;
  Secondtime = 0;
  Militime = 0;

  hrs.textContent ="00";
  mins.textContent ="00";
  secs.textContent ="00";
  milisecs.textContent ="00";

   strbtn.disabled = false
   
});
