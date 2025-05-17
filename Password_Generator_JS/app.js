
const length = document.querySelector('#length');
const input_length = document.querySelector('#length-value')

const sybmol_allowed = document.querySelector('#symbol-check');
const number_allowed = document.querySelector('#number');

const output_display = document.querySelector('#display-output')

const generate_password_btn = document.querySelector('#generate-password');



function generate_password(){
    const include_number = number_allowed.checked ;
    const include_symbols = sybmol_allowed.checked ;

    console.log(include_number);
    console.log(include_symbols);

    const curr_length = parseInt(length.value);

    let str = "abcdefghijklmnopqrstuvyxzABCDEFGHIJKLMNOQPRSTUVXYZ"
    let num = "1234567890";
    let symbols = "!@#$%^&*()_+=-[]{};:\|?/>.<,";


    if(include_number){
    str += num;
    }
    if(include_symbols){
        str += symbols;
    }

    let pass = "";


    for(let i= 0 ; i< curr_length ; i++){

    let random = Math.floor((Math.random() * str.length )+1);

    pass += str.charAt(random);

    }

    output_display.innerHTML = pass;
    console.log(pass);

}



length.addEventListener( 'input', (e)=>{
   
    input_length.innerHTML = e.target.value;

        generate_password_btn.addEventListener('click',function generate_password(){
        const include_number = number_allowed.checked ;
        const include_symbols = sybmol_allowed.checked ;

        console.log(include_number);
        console.log(include_symbols);

        const curr_length = parseInt(length.value);

        let str = "abcdefghijklmnopqrstuvyxzABCDEFGHIJKLMNOQPRSTUVXYZ"
        let num = "1234567890";
        let symbols = "!@#$%^&*()_+=-[]{};:\|?/>.<,";


        if(include_number){
        str += num;
        }
        if(include_symbols){
            str += symbols;
        }

        let pass = "";


        for(let i= 0 ; i< curr_length ; i++){

        let random = Math.floor((Math.random() * str.length )+1);

        pass += str.charAt(random);

        }

        output_display.innerHTML = pass;
        console.log(pass);

})



})




//initailially 

generate_password();
    

   
    

    





