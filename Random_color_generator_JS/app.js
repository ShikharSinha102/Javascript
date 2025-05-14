const getColor = () =>{
    const random_number = Math.floor(Math.random() * 16777215);
    console.log(random_number);
    const random_code = "#"+ random_number.toString(16);
    document.body.style.backgroundColor = random_code;
    

    document.getElementById('color-code').innerText = random_code;

}

document.getElementById('btn').addEventListener( 'click',getColor);



//init color: 
getColor();