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

const btnNormal = document.getElementById('normal');
const btnJazz = document.getElementById('jazz');
const btnChiptune = document.getElementById('chiptune');

let mute = false 
let volumeIcon = document.getElementById("volumeIcon")
let exampleList = ['Sweepstakes', '&', 'Cabinet Man', "Gangstas Paradise", "Help", "New Gold", "Yesterday (Remastered)", "Really Cool Wig", "Brodyquest", "Two Trucks", "A Mask Of My Own Face", "Everybody Loves Raymond", "Jaws", "My Trains", "Sundial", 
"Marketland", "Amnesia Was Her Name", "As Your Father I Expressly Forbid It", "I Earn My Life",
"Reaganomics", "Spiral Of Ants", "Touch-Tone Telephone", "When He Died", "Sweet Bod", "Eighth Wonder", "Soft Fuzzy Man",
"Taken for a Ride", "The Bidding", "Banana Man", "Two Wuv", "Ruler Of Everything", "You & Me",
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

let originalArray = ['Sweepstakes', '&', 'Cabinet Man', "Gangstas Paradise", "Help", "New Gold", "Yesterday (Remastered)", "Really Cool Wig", "Brodyquest", "Two Trucks", "A Mask Of My Own Face", "Everybody Loves Raymond", "Jaws", "My Trains", "Sundial", 
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

let OgjazzArr = [
  'A Gentle Reminder', 'Akaishi', 'Another Land', 'Answer Me My Love', 'Anthem', 'Constantly Changing', 'Dont Explain', 'Elsa', 'Estate', 'Farewell Farewell', 'First Day Of Spring','Foggy Sunday', "Her", 'Horizont', 'Im Not Myself Anymore', 'Knife In The Water',
  'Lonely Woman', 'Map - Compass', 'Melody', 'Misty', 'Miyako', 'Motel Money', 'My Funny Valentine', 'My One And Only Love',
  'Naima', 'Night Wispers', 'Obliqua', 'Over The Rainbow', "Release", 'Solace', 'Some Other Time', 'Sondan', 'Special One', 'Stop Fighting',
  'Swan Lake', 'Tender Love', 'The Peakocks', 'The Shining Sea', 'Totalerweise', 'Tranquility',
  'Under The Sun', 'Unsaid', 'Voyage', 'Waters Edge', 'When Sunny Gets Blue', 'You Make Me Feel Brand New', 
  'Youth', 'Youve Changed', 'Unworthy', 'Giving Thanks', 'Prayer', 'Cant Buy Me Love', 'Vacqueyras', 'Down The Memory Lane', 'One Hundred Ways',
  'It Could Happen To You', 'I See Your Face Before Me'
];

let jazzArr = [
  'A Gentle Reminder', 'Akaishi', 'Another Land', 'Answer Me My Love', 'Anthem', 'Constantly Changing', 'Dont Explain', 'Elsa', 'Estate', 'Farewell Farewell', 'First Day Of Spring','Foggy Sunday', "Her", 'Horizont', 'Im Not Myself Anymore', 'Knife In The Water',
  'Lonely Woman', 'Map - Compass', 'Melody', 'Misty', 'Miyako', 'Motel Money', 'My Funny Valentine', 'My One And Only Love',
  'Naima', 'Night Wispers', 'Obliqua', 'Over The Rainbow', "Release", 'Solace', 'Some Other Time', 'Sondan', 'Special One', 'Stop Fighting',
  'Swan Lake', 'Tender Love', 'The Peakocks', 'The Shining Sea', 'Totalerweise', 'Tranquility',
  'Under The Sun', 'Unsaid', 'Voyage', 'Waters Edge', 'When Sunny Gets Blue', 'You Make Me Feel Brand New', 
  'Youth', 'Youve Changed', 'Unworthy', 'Giving Thanks', 'Prayer', 'Cant Buy Me Love', 'Vacqueyras', 'Down The Memory Lane', 'One Hundred Ways',
  'It Could Happen To You', 'I See Your Face Before Me'
];

let OgChiptuneArr = [
  '2k9battlejam', '4 Repeating Chords', '8 Bit Adventure', '9-Bit Expedition', 'Acheron', 'Aquatic Jambiance', 'Astro Soda', 'At Teh Disko', 'Badlands', 'Be Gone Mr. Gawne', 'Behemoth', 'Beyond Bounds', 'Bitpop', 'Bright Matter', 'Caps On Hats Off', 'Cartridge', 'Cascade', 'Chip Zeal', 'Circuithead', 'Cloudgazer', 'Collision Event',
  'Commando Steve', 'Compass', 'Concrete', 'Corrision City', 'Credits Song For My Death', 'Cronos', 'Damage', 'Dew', 'Dinner Before Dawn', 'Disconnect', 'Dolphins In Space', 'Easy Mode', 
  'Ember', 'Escapist', 'Farbror Melker Fixar Fiskdamm', 'Final Blast', 'Flicker', 'Flirt Flirt Oh It Hurts', 'Formed By Glaciers', 'Fox', 'Go For Distance', 'Gravity', 'Helmut Haunter', 'I Inc', 'Icarus', 'In The Halls Of The Usurper', 'Indolence', 
  'Jack Russel', 'Juggernaut', 'Leaving Leafwood Forest', 'Live By The Sword', 'Lorgasm', 'Love Is Insecurable', 'Machinery', 'Manarola', 'Mellow', 'Milky Ways', 'Motivation', 'Musraket', 'Only Human', 'Out Of Love', 'Overworld', 'Paracet', 'Parallel Processing', 'Partybolt', 
  'Pathfinder', 'Penguin Zombie Apocalypse', 'Pewpewpew', 'Pirate Manners', 'Planet I', 'Planet II', 'Planet III', 'Planet IV', 'Planet V', 'Portabellohead', 'Positive Force', 'Restoration', 'Retro Tune', 'Rip Crystal Visions', 'Ropes',
  'Seahorse Dreams', 'Sleet', 'Starlight Eyes', 'Starship Showdown', 'Steampunk Warlord', 'Summits', 'Sunrise', 'Symphony Of A Forgotten Sprite', 'The Alliance', 'The Cairn', 'The Cave The Treasure', 'The Hibernator', 'The Maze Of Mayonnaise',
  'The Reaver', 'The See-Through Zone', 'The Spectator', 'Tidal Force', 'To The Sky', 'Toaster', 'Up In My Jam', 'Vindicate Me', 'Virtuoso Sexy', 'Vita', 'Vitamin B12', 'Warm Hugs In Court', 'We Are Wired', 'Zero Gravity Love'
]
let chiptuneArr = [
  '2k9battlejam', '4 Repeating Chords', '8 Bit Adventure', '9-Bit Expedition', 'Acheron', 'Aquatic Jambiance', 'Astro Soda', 'At Teh Disko', 'Badlands', 'Be Gone Mr. Gawne', 'Behemoth', 'Beyond Bounds', 'Bitpop', 'Bright Matter', 'Caps On Hats Off', 'Cartridge', 'Cascade', 'Chip Zeal', 'Circuithead', 'Cloudgazer', 'Collision Event',
  'Commando Steve', 'Compass', 'Concrete', 'Corrision City', 'Credits Song For My Death', 'Cronos', 'Damage', 'Dew', 'Dinner Before Dawn', 'Disconnect', 'Dolphins In Space', 'Easy Mode', 
  'Ember', 'Escapist', 'Farbror Melker Fixar Fiskdamm', 'Final Blast', 'Flicker', 'Flirt Flirt Oh It Hurts', 'Formed By Glaciers', 'Fox', 'Go For Distance', 'Gravity', 'Helmut Haunter', 'I Inc', 'Icarus', 'In The Halls Of The Usurper', 'Indolence', 
  'Jack Russel', 'Juggernaut', 'Leaving Leafwood Forest', 'Live By The Sword', 'Lorgasm', 'Love Is Insecurable', 'Machinery', 'Manarola', 'Mellow', 'Milky Ways', 'Motivation', 'Musraket', 'Only Human', 'Out Of Love', 'Overworld', 'Paracet', 'Parallel Processing', 'Partybolt', 
  'Pathfinder', 'Penguin Zombie Apocalypse', 'Pewpewpew', 'Pirate Manners', 'Planet I', 'Planet II', 'Planet III', 'Planet IV', 'Planet V', 'Portabellohead', 'Positive Force', 'Restoration', 'Retro Tune', 'Rip Crystal Visions', 'Ropes',
  'Seahorse Dreams', 'Sleet', 'Starlight Eyes', 'Starship Showdown', 'Steampunk Warlord', 'Summits', 'Sunrise', 'Symphony Of A Forgotten Sprite', 'The Alliance', 'The Cairn', 'The Cave The Treasure', 'The Hibernator', 'The Maze Of Mayonnaise',
  'The Reaver', 'The See-Through Zone', 'The Spectator', 'Tidal Force', 'To The Sky', 'Toaster', 'Up In My Jam', 'Vindicate Me', 'Virtuoso Sexy', 'Vita', 'Vitamin B12', 'Warm Hugs In Court', 'We Are Wired', 'Zero Gravity Love'
];

let songIndex = 0;
let i = 0
let afa = shuffleArray(originalArray);
let shuffledJazz = shuffleArray(jazzArr)
let shuffledChiptune = shuffleArray(chiptuneArr)
let songs = exampleList;
let arrayLength = songs.length;
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

let playingChiptune = false
function chiptune(){
  if(playingChiptune === false){
    playingChiptune = true;
    playingNormal = false;
    playingJazz = false;
    btnChiptune.style.color = "#646161";
    btnChiptune.style.border = "1px solid #646161";
    btnNormal.style.color = "#c6c5c6";
    btnNormal.style.border = "1px solid #c2c2c2";
    btnJazz.style.color = "#c6c5c6";
    btnJazz.style.border = "1px solid #c2c2c2";
    songIndex = 0;
    songs = OgChiptuneArr;
    arrayLength = songs.length;
    loadSong();
    nextSong();
    prevSong()
  }
}

let playingJazz = false
function jazz(){
  if(playingJazz === false){
    playingJazz = true;
    playingNormal = false;
    btnJazz.style.color = "#646161";
    btnJazz.style.border = "1px solid #646161";
    btnNormal.style.color = "#c6c5c6";
    btnNormal.style.border = "1px solid #c2c2c2";
    songIndex = 0;
    songs = OgjazzArr;
    arrayLength = songs.length;
    loadSong();
    nextSong();
    prevSong()
  }
}

let playingNormal = true
function normal(){
  if(playingNormal === false){
    playingNormal = true;
    playingJazz = false;
    btnNormal.style.color = "#646161";
    btnNormal.style.border = "1px solid #646161";
    btnJazz.style.color = "#c6c5c6";
    btnJazz.style.border = "1px solid #c2c2c2";
    songIndex = 0;
    songs = exampleList;
    arrayLength = songs.length;
    loadSong();
    nextSong();
    prevSong();
  }
}

var counter = true

function loadSong(song) {
  if(playingNormal === true){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
  }
  else if(playingJazz === true){
    title.innerText = song;
    audio.src = `jazz/${song}.mp3`;
    cover.src = `images/Jazz.jpg`;
  }

  else if(playingChiptune === true){
    title.innerText = song;
    audio.src = `chiptune/${song}.mp3`;
    cover.src = `images/Chiptune.jpg`;
  }
}


//* --------------- CONTROLS --------------- //

function shuffle(){
  if(counter === true){
    if(playingJazz === true){
      counter = false;
      shuffledJazz = shuffleArray(jazzArr);
      songs = shuffledJazz;
      shuffleIcon.style.color = "#646161";
      queue();
    }
    else if(playingNormal === true){
      counter = false;
      afa = shuffleArray(originalArray);
      songs = afa;
      shuffleIcon.style.color = "#646161";
      queue();
    }
  }

  else if(counter === false){
    if(playingJazz === true){
      counter = true;
      songs = OgjazzArr;
      shuffleIcon.style.color = "#dfdbdf";
      queue();
    }
    if(playingNormal === true){
      counter = true;
      songs = exampleList;
      shuffleIcon.style.color = "#dfdbdf";
      queue();
    }
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
  if(isLooping == true){
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
  }

  else if(isLooping == false){
    if (songIndex < 0) {
      songIndex = 0;
    }
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