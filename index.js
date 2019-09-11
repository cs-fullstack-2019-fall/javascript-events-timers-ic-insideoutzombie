// Get node referneces from the DOM

let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');


// setup event listener for buttons (click)
button1.addEventListener("click", btn1click);
button2.addEventListener("click", btn2click);

// button 1 clicked
function btn1click(ev) {
  button2.removeAttribute('disabled');
  button1.setAttribute('disabled', '');
  button1.innerText = "Don't Touch It";
  button2.innerText = "Click Me";
}

// button 2 clicked
function btn2click(ev) {
  button1.removeAttribute('disabled');
  button2.setAttribute('disabled', '');
  button2.innerText = "Do It Again";
  button1.innerText = "Click Me";
}
