var getUserName = prompt("Hello, World");

console.log(getUserName);

document.getElementById("username").innerText = getUserName;
//tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })