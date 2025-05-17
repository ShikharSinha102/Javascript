alert("Please On the Internet")

let imgBox = document.getElementById('img-box')
let qrImage = document.getElementById("qr-image")
let qrText = document.getElementById("qr-text");
let show_err = document.getElementById("show-err")
console.log(qrImage)
console.log(qrText)
console.log(show_err)

function QRgenerator(){

    if(qrText.value.length > 0){
        
    setTimeout(()=>{
        
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    }, 1000)

    }else{
        qrImage.remove();

        show_err.innerText = "Enter Some Site URL"

        show_err.style = "display: block"




        


    }

}