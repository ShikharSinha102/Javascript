

const clock= document.getElementById('clock');
//const= document.querySelector('.clock');

setInterval(function(){
    let date= new Date();
    console.log(date);
    // console.log(date.toLocaleDateString());
    // clock.innerHTML=date.toLocaleTimeString();
    clock.innerHTML=date.toLocaleTimeString();



},1000);


//1000 represents 1 sec