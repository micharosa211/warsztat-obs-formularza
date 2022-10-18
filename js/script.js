console.log('warsztat');

let form = document.getElementById("form");

let submitForm = (event) => {
    event.preventDefault();
 console.log('Submit FORM')
};

form.addEventListener('submit', submitForm);

console.log(form);

let Fname = document.querySelector(name=)