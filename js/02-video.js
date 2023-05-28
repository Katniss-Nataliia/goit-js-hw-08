
// import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

player.getVideoTitle().then(function(title){
    console.log('title: ', title)
})


const onPlay = function(data){
    console.log('played the video')
}
player.on('play', onPlay);

const saveData = function (){
    localStorage.setItem(LOCALSTORAGE_KEY, iframe.currentTime);
}
player.on('timeupdate', saveData);

player.setCurrentTime().then(function(seconds){
    localStorage.getItem(LOCALSTORAGE_KEY, iframe.seconds)
}).catch(function(error){
    switch(error.name){
        case 'RangeError':
            "time was 0";
            break;
        default:
            "error occured";
            break;
    }
})