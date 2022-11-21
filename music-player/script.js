const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const loopBtn = document.getElementById('loop');
const body = document.querySelector('body');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
let queueDiv = document.getElementById('queue')
const divQueue = document.getElementById("queueDiv")
const durTime = document.querySelector('#durTime');
const dropBtn = document.querySelector('.dropbtn');
let a = document.getElementById('audio');
let mute = false 
let volumeIcon = document.getElementById("volumeIcon")
var exampleList = ['Sweepstakes', '&', 'Cabinet Man', "Gangsta's Paradise", "Help", "New Gold", "Yesterday (Remastered)", "Really Cool Wig", "Brodyquest", "Two Trucks", "A Mask of My Own Face", "Everybody Loves Raymond", "Jaws", "My Trains", "Sundial", 
"Marketland", "Amnesia Was Her Name", "As Your Father I Expressly Forbid It", "I Earn My Life",
"Reaganomics", "Spiral Of Ants", "Touch-Tone Telephone", "When He Died", "Sweet Bod", "Eighth Wonder", "Soft Fuzzy Man",
"Taken for a Ride", "The Bidding", "Banana Man", "Two Wuv", "Ruler of Everything", "You & Me",
"Sacred Beast", "A Lady", "Misery Fell", "Clint Eastwood", "Man Research (Clapper)", "Double Bass",
"Rock The House", "19-2000", "Tomorrow Comes Today", "Rockit", "We Are The Happy Landfill",
"Detroit", "Humility", "Tranz", "Hollywood", "Kansas", "Souk Eye", "Broken", "Plastic Beach",
"To Binge", "Pirate Jet", "Stylo", "Superfast Jellyfish", "Empire Ants", "Glitter Freeze", "On Melancholy Hill",
"All Alone", "White Light", "DARE", "Demon Days", "Welcome To The World Of The Plastic Beach",
"O Green World", "Dirty Harry", "Feel Good Inc", "Every Planet We Reach Is Dead", "November Has Come",
"Kids With Guns", "Last Living Souls", "Cracker Island", "Smooth Criminal", "Bad", "Strawberry Fields Forever",
"Penny Lane", "Sgt Pepper's Lonely Hearts Club Band", "Lucy In The Sky With Diamonds", "A Day In A Life",
"Taxman", "Let It Be", "Come Together", "Because", "Magical Mystery Tour", "Eleanor Rigby",
"My Castle Town", "Death By Glamour"];

var originalArray = ['Sweepstakes', '&', 'Cabinet Man', "Gangsta's Paradise", "Help", "New Gold", "Yesterday (Remastered)", "Really Cool Wig", "Brodyquest", "Two Trucks", "A Mask of My Own Face", "Everybody Loves Raymond", "Jaws", "My Trains", "Sundial", 
"Marketland", "Amnesia Was Her Name", "As Your Father I Expressly Forbid It", "I Earn My Life",
"Reaganomics", "Spiral Of Ants", "Touch-Tone Telephone", "When He Died", "Sweet Bod", "Eighth Wonder", "Soft Fuzzy Man",
"Taken for a Ride", "The Bidding", "Banana Man", "Two Wuv", "Ruler of Everything", "You & Me",
"Sacred Beast", "A Lady", "Misery Fell", "Clint Eastwood", "Man Research (Clapper)", "Double Bass",
"Rock The House", "19-2000", "Tomorrow Comes Today", "Rockit", "We Are The Happy Landfill",
"Detroit", "Humility", "Tranz", "Hollywood", "Kansas", "Souk Eye", "Broken", "Plastic Beach",
"To Binge", "Pirate Jet", "Stylo", "Superfast Jellyfish", "Empire Ants", "Glitter Freeze", "On Melancholy Hill",
"All Alone", "White Light", "DARE", "Demon Days", "Welcome To The World Of The Plastic Beach",
"O Green World", "Dirty Harry", "Feel Good Inc", "Every Planet We Reach Is Dead", "November Has Come",
"Kids With Guns", "Last Living Souls", "Cracker Island", "Smooth Criminal", "Bad", "Strawberry Fields Forever",
"Penny Lane", "Sgt Pepper's Lonely Hearts Club Band", "Lucy In The Sky With Diamonds", "A Day In A Life",
"Taxman", "Let It Be", "Come Together", "Because", "Magical Mystery Tour", "Eleanor Rigby",
"My Castle Town", "Death By Glamour"];
let songIndex = 0;
var i = 0
var afa = shuffleArray(originalArray);
var songs = exampleList;
var arrayLength = songs.length;
let isLooping = false;
let shuffleIcon = document.getElementById("shuffleIcon");

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var counter = true

function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${song}.jpg`;
}


//* --------------- CONTROLS --------------- //

function shuffle(){
  if(counter === true){
    counter = false;
    afa = shuffleArray(originalArray);
    songs = afa;
    shuffleIcon.style.color = "#646161";
    queue();
  }

  else if(counter === false){
    counter = true;
    songs = exampleList;
    shuffleIcon.style.color = "#dfdbdf";
    queue();
  }
}

function queue(){
      queueDiv.innerHTML = ""
      for (var i = 0; i < arrayLength; i++) {
        var p = document.createElement("li");
        p.innerText = songs[i];
        queueDiv.appendChild(p);
        if(i == songIndex){
          p.style.color = "#44cc77";
          p.style.fontWeight = "bold";
          p.style.textDecoration = "underline";
        }
      }
}

loadSong(songs[songIndex]);
let queueCounter = false;

function showQueue(){
  if(queueCounter === false){
    queueCounter = true;
    queueDiv.style.top = "55%";
    queueDiv.style.left = "77%";
    queueDiv.style.opacity = "1";
  }

  else if(queueCounter === true){
    queueCounter = false;
    queueDiv.style.top = "50%";
    queueDiv.style.left = "50%";
    queueDiv.style.opacity = "0";
  }
}

function loop(){
  isLooping = !isLooping;
  if(isLooping == true){
    loopBtn.style.color = "#646161";
  }
  else{
    loopBtn.style.color = "#dfdbdf";
  }
}

let sliderVolume = 0 + "." + document.getElementById('volumeControl').value;
function volume(){
  sliderVolume = 0 + "." + document.getElementById('volumeControl').value;
  a.volume = sliderVolume;
  mute = false;
}

function Mute(){
  if(mute == false){
    mute = true;
    a.volume = 0;
    volumeIcon.classList.remove('fa-volume');
    volumeIcon.classList.add('fa-volume-xmark');
  }
  else if(mute == true){
    mute = false;
    a.volume = sliderVolume;
    volumeIcon.classList.remove('fa-volume-xmark');
    volumeIcon.classList.add('fa-volume');
  }
}

function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  audio.play();
  queue()
  document.title = `Erify - ${songs[songIndex]}`; 
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
  document.title = `Erify`; 
}

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

function nextSong() {
  songIndex++;
  queue()
  if(isLooping == true){
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  }

  else if(isLooping == false){
    if (songIndex > songs.length - 1) {
      songIndex = songIndex - 1;
    }
    
  }

  loadSong(songs[songIndex]);

  playSong();
}

//* --------------- CONTROLS --------------- //

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	currTime.innerHTML = min +':'+ sec;

	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 
	
	get_sec_d (duration);

	durTime.innerHTML = min_d +':'+ sec_d;
		
};

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

window.addEventListener('keyup', function(e){
  if (e.key == " " || e.code == "Space") {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  }

  if (e.key == "n" || e.code == "N") {
    nextSong()
  }

  if (e.key == "p" || e.code == "P") {
    prevSong()
  }
})



prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);

audio.addEventListener('timeupdate',DurTime);