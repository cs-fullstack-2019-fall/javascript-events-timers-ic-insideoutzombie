let animated_boy = document.getElementById("animated");
let spriteArray = ["guy1.png","guy2.png", "guy3.png", "guy4.png", "guy5.png", "guy6.png", "guy7.png", "guy8.png", "guy9.png"];
let counter = 0;
function count_func(){
    animated_boy.src = spriteArray[counter];
    counter++;
    if(counter === 9){
        counter = 0;
    }
}
function animateHim(){
    counter = 0;
    let time_interval = window.setInterval(count_func,200);
}
animateHim();
