let emails = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addemail = (ev) => {
    ev.preventDefault(); //to stop the form submitting
    let data = {
        id: Date.now(),
        email: document.getElementById('title').value,
    }
    emails.push(data);
    document.forms[0].reset(); // to clear the form for the next entries
    //document.querySelector('form').reset();

    //saving to localStorage
    localStorage.setItem('MyMovieList', JSON.stringify(emails));
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', addemail);
});