

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCAL_STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', saveData);
setCurrentTime();

function saveData (data){
    localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds.toString());
}

function setCurrentTime(){
    const savedTime = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(!savedTime){
        return
    }
    player.setCurrentTime(savedTime)

}