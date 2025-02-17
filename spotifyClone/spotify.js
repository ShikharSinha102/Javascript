

alert("for the very first time, Connect to the Internet and Refresh the page ");

let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar= document.getElementById("myprogressbar");
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

const Songs=[
    {songName:"Abhi to party Shru hui hai ", Filepath:"/songs/1.mp3",coverpath:""},
    {songName:"Dil Lagi kudi", Filepath:"/songs/2.mp3",coverpath:""},

    {songName:"Humma-Humma Jubin", Filepath:"/songs/3.mp3",coverpath:""},

    {songName:"Anarkali Disko chali", Filepath:"/songs/4.mp3",coverpath:""},

    {songName:"Allah Maaf Kre", Filepath:"/songs/5.mp3",coverpath:""},

    {songName:"Ankhon ki Gustakhiya", Filepath:"/songs/6.mp3",coverpath:""},
    {songName:"Ankho me Teri", Filepath:"/songs/7.mp3",coverpath:""},
    {songName:"Janam-Janam", Filepath:"/songs/8.mp3",coverpath:""},
    {songName:"Jo Hal Dil ka", Filepath:"/songs/9.mp3",coverpath:""},
    {songName:"Zalima Raees", Filepath:"/songs/10.mp3",coverpath:""},
    {songName:"Gulaboo", Filepath:"/songs/11.mp3",coverpath:""},
    {songName:"Ashiq Banaya Apne", Filepath:"/songs/11.mp3",coverpath:""}
    

    







    

]
// let audioElement= new Audio("Dil_Ka_Rishta_(Instrumental)(256k).mp3");

songItems.forEach((element,i)=>{
    // console.log(element, i)
    element.getElementsByTagName('img')[0].src = Songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = Songs[i].songName;

})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-solid fa-pause');
        masterplay.classList.add('fa-solid fa-play');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-solid fa-play');
        masterplay.classList.add('fa-solid fa-pause');
        gif.style.opacity = 0;
    }
    }
    )
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupadae');
    
progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
// console.log(progress);
myprogressbar.value=progress;
})



myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime= myprogressbar.value  * audioElement.duration/100;
})





const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(e.target.classList.contains('fa-circle-play')){

            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src =`songs/${songIndex + 1}.mp3` ;
            masterSongName.innerText = Songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');

        }
        else{
            e.target.classList.remove('fa-circle-pause')
            e.target.classList.add('fa-circle-play')
            audioElement.currentTime=1;
            audioElement.pause();
            gif.style.opacity = 0;
            masterplay.classList.add('fa-circle-play')
            masterplay.classList.remove('fa-circle-pause')
        }
       
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;

    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = Songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');


})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;

    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = Songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
   
    masterplay.classList.add('fa-circle-play');
    masterplay.classList.remove('fa-circle-pause');
})



//<i class="fa-solid fa-play"></i>
