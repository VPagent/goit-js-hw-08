import Player from '@vimeo/player'
import  throttle  from 'lodash.throttle';
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', throttle(getCurrentTime, 1000)) 
    function getCurrentTime({seconds}){
        localStorage.setItem("videoplayer-current-time", seconds)
    }
    if(localStorage.getItem("videoplayer-current-time")){
        let currentSec = localStorage.getItem("videoplayer-current-time")
        player.setCurrentTime(currentSec)
    }


    
     
    
    