// declaring the variable using a let for the id of txt_field which is used with the input tag
let t_field = document.getElementById("txt_field");

// declaring the function to check for lowercase
function checkForLowercase(ev) {

// declares key stroke and character enter is toLowerCase()
  let char_entered = ev.key;
  let char_lower = char_entered.toLowerCase();

// if statement with conditional to check if input is lowercase or not
  if(char_entered !== char_lower) {
    // some annoying alert
    alert("Please enter lowered case letters");
    // this prevents a key from being typed if the letter is capitalized
    ev.preventDefault();
  }
}

// calling the let element from above that listening for the keypress event and
// when its fired it calls the function call
t_field.addEventListener("keypress", checkForLowercase);
