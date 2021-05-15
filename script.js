const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const time = document.getElementById('time');


//update progress
function updateProgress(){
    progress.value=(video.currentTime / video.duration )* 100;

    //set minute
    let minute=Math.floor(video.currentTime / 60);
    if(minute<10){
        minute = '0'+minute;
    }
    //set seconds
    let second=Math.floor(video.currentTime % 60);
    if(second<10){
        second = '0'+second;
    }
    time.innerText= minute +':'+second;
}
//change the progress
function setProgress(){
    video.currentTime=(+progress.value * video.duration) / 100;
}
    




//toggle video
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}
//update play button
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML= '<i class="fa fa-play fa2x"></i>';
    }else{
        play.innerHTML= '<i class="fa fa-pause fa2x"></i>';
    }
}
//stop video
function stopVideo(){
   video.currentTime=0; 
   video.pause();
}


video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('timeupdate',updateProgress);

stop.addEventListener('click',stopVideo);

play.addEventListener('click',toggleVideoStatus);

progress.addEventListener('change',setProgress);
