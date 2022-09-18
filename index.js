let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".song-name");
let track_artist = document.querySelector(".artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
let nav = document.querySelectorAll(".wow");
let text = document.querySelectorAll(".text")

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let curr_track = document.createElement('audio');
let navig = document.querySelector('.list');
let mRemove = document.querySelectorAll('.music');


function working(){
    if(navig.style.display === "none"){
        navig.style.display = "block";
    }else{
        navig.style.display = "none";
    }
    
}
 mRemove.forEach(remove => {
 remove.addEventListener("click", () => {
navig.style.display = "none";
})
})


let track_index = 0;
let isPlaying = false;
let updateTimer;



let track_list = [
{
	name: "Erwin Speech",
	artist: "Attack on titan",
	image: "images/intro.jpg",
	path: "music/intro.mp3"
},
{
	name: "Little do you know",
	artist: "Alex & Sierra",
	image: "images/little.jpg",
	path: "music/little.mp3"
},
{
	name: "I see your monsters",
	artist: "Katie sky",
	image: "images/monsters.jpg",
	path: "music/monsters.mp3"
},
{
	name: "i need your love.",
	artist: "Calvin Harris",
	image: "images/love.jpg",
	path: "music/love.mp3"
},
{
	name: "how could you leave us",
	artist: "NF",
	image: "images/leave.jpg",
	path: "music/leave.mp3"
},
{
	name: "Are you sure.",
	artist: "Lyta",
	image: "images/lyta.jpeg",
	path: "music/lyta.mp3"
},
{
	name: "Send my love to you",
	artist: "Adele",
	image: "images/send.jpg",
	path: "music/send.mp3"
},
{
	name: "Someone You Love",
	artist: "Adele",
	image: "images/someone.jpg",
	path: "music/someone.mp3",
},
];

function loadTrack(track_index) {
    clearInterval(updateTimer);
    resetValues();
    
     curr_track.src = track_list[track_index].path;
    curr_track.load();
    
   track_art.src = track_list[track_index].image;
    track_name.textContent = track_list[track_index].name;
    track_artist.textContent = track_list[track_index].artist;
    now_playing.textContent = `PLAYING ${track_index + 1} OF  ${track_list.length}`;
    
    updateTimer = setInterval(seekUpdate, 1000);
    
    curr_track.addEventListener("ended", nextTrack);
    
    random_bg_color();

    }
    
    function random_bg_color() {
    let red = Math.floor(Math.random() * 256) + 30;
    let green = Math.floor(Math.random() * 256) + 30;
    let blue = Math.floor(Math.random() * 256) + 30;
    
    let bgColor = `rgb(${red}, ${blue}, ${green})`;
    
    document.body.style.background = bgColor;
    }
    
    function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
    }

    function playpauseTrack() {
        if (!isPlaying) playTrack();
        else pauseTrack();
        }
        
        function playTrack() {
       curr_track.play();
        isPlaying = true;
        
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
        }
        
        function pauseTrack() {
        curr_track.pause();
        isPlaying = false;
        
          playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
        }
        
        function nextTrack() {
       if (track_index < track_list.length - 1)
            track_index += 1;
        else track_index = 0;
        
         loadTrack(track_index);
        playTrack();
        }
        
        function prevTrack() {
        if (track_index > 0)
            track_index -= 1;
        else track_index = track_list.length - 1;
        
        loadTrack(track_index);
        playTrack();
        }
        function seekTo() {
           seekto = curr_track.duration * (seek_slider.value / 100);
            
            curr_track.currentTime = seekto;
            }
            
            function setVolume() {
            curr_track.volume = volume_slider.value / 100;
            }
            
            function seekUpdate() {
            let seekPosition = 0;
            
            if (!isNaN(curr_track.duration)) {
                seekPosition = curr_track.currentTime * (100 / curr_track.duration);
                seek_slider.value = seekPosition;
            
                let currentMinutes = Math.floor(curr_track.currentTime / 60);
                let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
                let durationMinutes = Math.floor(curr_track.duration / 60);
                let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
            
                if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
                if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
                if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
                if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
            
                curr_time.textContent = currentMinutes + ":" + currentSeconds;
                total_duration.textContent = durationMinutes + ":" + durationSeconds;
            }
            }

            function track1(){
                loadTrack(0)
                playTrack();                
            }
            function track2(){
                loadTrack(1)
                playTrack();
            }
            function track3(){
                loadTrack(2)
                playTrack();
            }
            function track4(){
                loadTrack(3)
                playTrack();
            }
            function track5(){
                loadTrack(4)
                playTrack();
            }
            function track6(){
                loadTrack(5)
                playTrack();
            }
            function track7(){
                loadTrack(6)
                playTrack();
            }
            function track8(){
                loadTrack(7)
                playTrack();
            }
    
            nav[0].src = track_list[0].image;
            nav[1].src = track_list[1].image;
            nav[2].src = track_list[2].image;
            nav[3].src = track_list[3].image;
            nav[4].src = track_list[4].image;
            nav[5].src = track_list[5].image;
            nav[6].src = track_list[6].image;
            nav[7].src = track_list[7].image;
            text[0].textContent = track_list[0].name;
            text[1].textContent = track_list[1].name;
            text[2].textContent = track_list[2].name;
            text[3].textContent = track_list[3].name;
            text[4].textContent = track_list[4].name;
            text[5].textContent = track_list[5].name;
            text[6].textContent = track_list[6].name;
            text[7].textContent = track_list[7].name;
        
            
loadTrack(track_index);

    