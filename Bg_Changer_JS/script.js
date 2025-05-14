const body = document.querySelector('body');
const boxes = document.querySelectorAll('.box');
const h2 = document.querySelector('h2')

boxes.forEach( (box)=>{

    box.addEventListener('click', function(e){

        h2.style.color = "black";

        
        if(e.target.id == 'grey'){
            
            body.style.backgroundColor = '#adb5bd' ;
        }
        if(e.target.id == 'red'){
            
            body.style.backgroundColor = '#dc2f02' ;
        }
        if(e.target.id == 'black'){
            
            body.style.backgroundColor = '#212529';
            h2.style.color= "white";
            
            
        }
        if(e.target.id == 'green'){
            
            body.style.backgroundColor = '#2d6a4f';
        }
        if(e.target.id == 'pink'){
            
            body.style.backgroundColor = '#ff87ab' ;
        }
        if(e.target.id == 'white'){
            
            body.style.backgroundColor = e.target.id ;
           

        }

        if(e.target.id == 'brown'){
            
            body.style.backgroundColor = "#9c6644" ;
            
           

        }

        if(e.target.id == 'yellow'){
            
            body.style.backgroundColor = "#ffc600" ;
            
           

        }
        if(e.target.id == 'vilot'){
            
            body.style.backgroundColor = "#5c0088" ;
            
           

        }

        if(e.target.id == 'navy-blue'){
            
            body.style.backgroundColor = '#003566' ;
            
           

        }








    })

})












