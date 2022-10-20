let form = document.getElementById('form');

const submitForm = (t) => {
    t.preventDefault();
    let firstName = document.querySelector('[name=fname]').value;
    let lastName = document.querySelector('[name=lname]').value;
    console.log(`Imie: ${firstName}, Nazwisko: ${lastName}`);
}
form.addEventListener('submit', submitForm);
