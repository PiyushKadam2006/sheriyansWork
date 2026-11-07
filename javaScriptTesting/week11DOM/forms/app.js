// let Email = document.querySelector("#Email");
// let Name = document.querySelector("#Name");
// let Mobile = document.querySelector("#Mobile");
// let street = document.querySelector("#street");
// let city = document.querySelector("#city");

let form = document.querySelector("form");
//form submit ke vakt window ko reload kartayyyy

let btn = document.querySelector("button");

// console.dir(Name.value);

// btn.addEventListener("click",(event)=>{
//     event.preventDefault();
//     console.dir(Name.value);
//     console.dir(Email.value);
//     console.dir(Mobile.value);
//     console.dir(city.value);
//     console.dir(street.value);
// })
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.dir(event);
    console.dir(form[1].value);
    // console.dir(event.target[0].value);
    console.dir(form[2].value);
    console.dir(form[3].value);
    console.dir(form[5].value);
    console.dir(form[6].value);
})

//revision 
/**
 * The browser sends the data and loads a new page, which is why JavaScript form handlers start with preventDefault.
 * preventDefault cancels the browser's default action, which for a form is sending the data and reloading.
 * A form can be submitted by pressing Enter inside an input, which a click listener on the button would miss.
 * Input values are always strings. Convert with Number() before doing arithmetic.
 * 
 */