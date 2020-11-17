"use strict";

var emails = []; // example {id:1592304983049, title: 'Deadpool', year: 2015}

var addemail = function addemail(ev) {
  ev.preventDefault(); //to stop the form submitting

  var data = {
    id: Date.now(),
    email: document.getElementById('title').value
  };
  emails.push(data);
  document.forms[0].reset(); // to clear the form for the next entries
  //document.querySelector('form').reset();
  //saving to localStorage

  localStorage.setItem('MyMovieList', JSON.stringify(emails));
};

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submit').addEventListener('click', addemail);
});