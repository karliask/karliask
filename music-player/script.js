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
let queueDiv = document.getElementById('queue');
const divQueue = document.getElementById("queueDiv");
let customDiv = document.getElementById('customP');
const divCustom = document.getElementById("customDiv");
const durTime = document.querySelector('#durTime');
const dropBtn = document.querySelector('.dropbtn');
let a = document.getElementById('audio');
const btnJazz = document.getElementById('jazz');
const btnIndie = document.getElementById('indie');
const btnChiptune = document.getElementById('chiptune');
const btnLofi = document.getElementById('lofi');
const btnCustom = document.getElementById('custom');
let mute = false;
let volumeIcon = document.getElementById("volumeIcon");

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
  '2k9 battle jam', '4 Repeating Chords', '8 Bit Adventure', '9-Bit Expedition', 'Acheron', 'Aquatic Jambiance', 'Astro Soda', 'At Teh Disko', 'Badlands', 'Be Gone Mr. Gawne', 'Behemoth', 'Beyond Bounds', 'Bitpop', 'Bright Matter', 'Caps On Hats Off', 'Cartridge', 'Cascade', 'Chip Zeal', 'Circuithead', 'Cloudgazer', 'Collision Event',
  'Commando Steve', 'Compass', 'Concrete', 'Corrision City', 'Credits Song For My Death', 'Cronos', 'Damage', 'Dew', 'Dinner Before Dawn', 'Disconnect', 'Dolphins In Space', 'Easy Mode', 
  'Ember', 'Escapist', 'Farbror Melker Fixar Fiskdamm', 'Final Blast', 'Flicker', 'Flirt Flirt Oh It Hurts', 'Formed By Glaciers', 'Fox', 'Go For Distance', 'Gravity', 'Helmut Haunter', 'I Inc', 'Icarus', 'In The Halls Of The Usurper', 'Indolence', 
  'Jack Russel', 'Juggernaut', 'Leaving Leafwood Forest', 'Live By The Sword', 'Lorgasm', 'Love Is Insecurable', 'Machinery', 'Manarola', 'Mellow', 'Milky Ways', 'Motivation', 'Musraket', 'Only Human', 'Out Of Love', 'Overworld', 'Paracet', 'Parallel Processing', 'Partybolt', 
  'Pathfinder', 'Penguin Zombie Apocalypse', 'Pewpewpew', 'Pirate Manners', 'Planet I', 'Planet II', 'Planet III', 'Planet IV', 'Planet V', 'Portabellohead', 'Positive Force', 'Restoration', 'Retro Tune', 'Rip Crystal Visions', 'Ropes',
  'Seahorse Dreams', 'Sleet', 'Starlight Eyes', 'Starship Showdown', 'Steampunk Warlord', 'Summits', 'Sunrise', 'Symphony Of A Forgotten Sprite', 'The Alliance', 'The Cairn', 'The Cave The Treasure', 'The Hibernator', 'The Maze Of Mayonnaise',
  'The Reaver', 'The See-Through Zone', 'The Spectator', 'Tidal Force', 'To The Sky', 'Toaster', 'Up In My Jam', 'Vindicate Me', 'Virtuoso Sexy', 'Vita', 'Vitamin B12', 'Warm Hugs In Court', 'We Are Wired', 'Zero Gravity Love'
]
let chiptuneArr = [
  '2k9 battle jam', '4 Repeating Chords', '8 Bit Adventure', '9-Bit Expedition', 'Acheron', 'Aquatic Jambiance', 'Astro Soda', 'At Teh Disko', 'Badlands', 'Be Gone Mr. Gawne', 'Behemoth', 'Beyond Bounds', 'Bitpop', 'Bright Matter', 'Caps On Hats Off', 'Cartridge', 'Cascade', 'Chip Zeal', 'Circuithead', 'Cloudgazer', 'Collision Event',
  'Commando Steve', 'Compass', 'Concrete', 'Corrision City', 'Credits Song For My Death', 'Cronos', 'Damage', 'Dew', 'Dinner Before Dawn', 'Disconnect', 'Dolphins In Space', 'Easy Mode', 
  'Ember', 'Escapist', 'Farbror Melker Fixar Fiskdamm', 'Final Blast', 'Flicker', 'Flirt Flirt Oh It Hurts', 'Formed By Glaciers', 'Fox', 'Go For Distance', 'Gravity', 'Helmut Haunter', 'I Inc', 'Icarus', 'In The Halls Of The Usurper', 'Indolence', 
  'Jack Russel', 'Juggernaut', 'Leaving Leafwood Forest', 'Live By The Sword', 'Lorgasm', 'Love Is Insecurable', 'Machinery', 'Manarola', 'Mellow', 'Milky Ways', 'Motivation', 'Musraket', 'Only Human', 'Out Of Love', 'Overworld', 'Paracet', 'Parallel Processing', 'Partybolt', 
  'Pathfinder', 'Penguin Zombie Apocalypse', 'Pewpewpew', 'Pirate Manners', 'Planet I', 'Planet II', 'Planet III', 'Planet IV', 'Planet V', 'Portabellohead', 'Positive Force', 'Restoration', 'Retro Tune', 'Rip Crystal Visions', 'Ropes',
  'Seahorse Dreams', 'Sleet', 'Starlight Eyes', 'Starship Showdown', 'Steampunk Warlord', 'Summits', 'Sunrise', 'Symphony Of A Forgotten Sprite', 'The Alliance', 'The Cairn', 'The Cave   The Treasure', 'The Hibernator', 'The Maze Of Mayonnaise',
  'The Reaver', 'The See-Through Zone', 'The Spectator', 'Tidal Force', 'To The Sky', 'Toaster', 'Up In My Jam', 'Vindicate Me', 'Virtuoso Sexy', 'Vita', 'Vitamin B12', 'Warm Hugs In Court', 'We Are Wired', 'Zero Gravity Love'
];

let lofiArr = ["a cluster of stars", "A Deriva", "A place in my heart", "abundant universe", "Across The Valley", "afloat", "Asatte", "catarse", "celestial space", "cerulean.", "Close Your Eyes", "Cosmogony", "Cradled by the Sea",
"Day's End", "Daydreams", "Deepsleep", "Enchanted", "Endless", "Eternity", "Exploration", "Fairy Dust", "Fallin' Asleep", "Fast Asleep",
"First love", "Gone Fishing", "Gratitude", "Half Light", "If only for a second",
"illuminate","Lisergia", "Looking at the Sky", "Los Andes", "Lost", "Lunar",
"Mantra", "Melancholy", "Melaton", "memorias postumas", "message in a bookshelf", "Midnight Blue", "midnight breeze",
"moon aura", "Motivated (Not)", "my best dream", "Nara", "nebula", "next to you", "Night Sparks", "one year has passed", "Parallax", "precious light", "Quiet Nights", "Reflective",
"Regular quest", "Rest now, my dear", "rest well, my friend", "sacred", "See you later", "shadow drops.", "Shelly beach", "Shut Eye", "simpler times", "Sleep Tight", "sliding between.", "Snowfall",
"Summer of '04", "Sweet dreams", "tenderly", "the universe has moved for us", "Time To Rest", "Together", "True Love", "two years have passed", "Umbra", "Viewfinder", "waterfront", "Weightlessness", "When the leaves stop falling...", "When The Stars Fell",
"Whisper Of The Sea", "Windowpane", "you found me"]

let OgLofiArr = ["a cluster of stars", "A Deriva", "A place in my heart", "abundant universe", "Across The Valley", "afloat", "Asatte", "catarse", "celestial space", "cerulean.", "Close Your Eyes", "Cosmogony", "Cradled by the Sea",
"Day's End", "Daydreams", "Deepsleep", "Enchanted", "Endless", "Eternity", "Exploration", "Fairy Dust", "Fallin' Asleep", "Fast Asleep",
"First love", "Gone Fishing", "Gratitude", "Half Light", "If only for a second",
"illuminate","Lisergia", "Looking at the Sky", "Los Andes", "Lost", "Lunar",
"Mantra", "Melancholy", "Melaton", "memorias postumas", "message in a bookshelf", "Midnight Blue", "midnight breeze",
"moon aura", "Motivated (Not)", "my best dream", "Nara", "nebula", "next to you", "Night Sparks", "one year has passed", "Parallax", "precious light", "Quiet Nights", "Reflective",
"Regular quest", "Rest now, my dear", "rest well, my friend", "sacred", "See you later", "shadow drops.", "Shelly beach", "Shut Eye", "simpler times", "Sleep Tight", "sliding between.", "Snowfall",
"Summer of '04", "Sweet dreams", "tenderly", "the universe has moved for us", "Time To Rest", "Together", "True Love", "two years have passed", "Umbra", "Viewfinder", "waterfront", "Weightlessness", "When the leaves stop falling...", "When The Stars Fell",
"Whisper Of The Sea", "Windowpane", "you found me"]

let indieArr = ["Sundial", "Kaleidoskull", "Amnesia Was Her Name", "The Man In Stripes & Glasses", "Marketland", "Gadzooks", 'Knife Fight', "The Only House Thats Not On Fire (Yet)" , "The Ocean", "The Afternoon",
"Spring Heeled Jack", "Being A Rock Star", "The Satirists Love Song","The Machine","Bill Watterson","Something Glowing", "Really Cool Wig", "Two Trucks", "A Mask Of My Own Face", "Everybody Loves Raymond", 
"Jaws", "My Trains", "Brodyquest", "Lifetime Achievement Award", "Touch-Tone Telephone", 'Cabinet Man', "No Eyed Girl", "When He Died", "Sweet Bod", "Eighth Wonder", 'Ancient Aliens', 
"Soft Fuzzy Man", "As Your Father I Expressly Forbid It",  "I Earn My Life", "Reaganomics", 'Man-Made Object', "Spiral Of Ants", "Redesign Your Logo",  
'Good Day', 'Greener', 'Welcome To Tally Hall', "Taken for a Ride", "The Bidding", 'Be Born', "Banana Man", 'Just Apathy', 'Spring And A Storm', "Two Wuv", 'Haiku', 'The Whole World And You', '13', "Ruler Of Everything", 'Hidden In The Sand', 'Mucka Blucka', 'Dream', 'Never Meant To Know', '&', "You & Me", 'Cannibal', 'Who You Are', "Sacred Beast", 'Hymn For A Scarecrow', "A Lady", 'The Trap', 'Turn The Lights Off', "Misery Fell", 'Out In The Twilight', 'You', 'Fate Of The Stars',
"Clint Eastwood", "Man Research (Clapper)", "Double Bass", "19-2000",
"Rock The House", "Tomorrow Comes Today", "Rockit", "We Are The Happy Landfill",
"Detroit", "Last Living Souls", "Kids With Guns", "O Green World", "Dirty Harry", "Feel Good Inc", "El Mañana", "Every Planet We Reach Is Dead", "November Has Come", "All Alone", "White Light", "DARE",
"Fire Coming Out Of The Monkey's Head", "Don't Get Lost In Heaven", "Demon Days",
"Welcome To The World Of The Plastic Beach", "White Flag", "Rhinestone Eyes", "Stylo", "Superfast Jellyfish",
"Empire Ants", "Glitter Freeze", "Some Kind Of Nature", "On Melancholy Hill", "Broken", 'Sweepstakes', "Plastic Beach", "To Binge",
'Cloud Of Unknowing',"Pirate Jet", "Humility", "Tranz", "Hollywood", "Kansas", 'Sorcererz', 'Idaho', 'Lake Zurich', 'Magic City', 'Fire Flies', 'One Percent',"Souk Eye", "Cracker Island", "New Gold", 'Skinny Ape'];

let OgIndieArr = ["Sundial", "Kaleidoskull", "Amnesia Was Her Name", "The Man In Stripes & Glasses", "Marketland", "Gadzooks", 'Knife Fight', "The Only House Thats Not On Fire (Yet)" , "The Ocean", "The Afternoon",
"Spring Heeled Jack", "Being A Rock Star", "The Satirists Love Song","The Machine","Bill Watterson","Something Glowing", "Really Cool Wig", "Two Trucks", "A Mask Of My Own Face", "Everybody Loves Raymond", 
"Jaws", "My Trains", "Brodyquest", "Lifetime Achievement Award", "Touch-Tone Telephone", 'Cabinet Man', "No Eyed Girl", "When He Died", "Sweet Bod", "Eighth Wonder", 'Ancient Aliens', 
"Soft Fuzzy Man", "As Your Father I Expressly Forbid It",  "I Earn My Life", "Reaganomics", 'Man-Made Object', "Spiral Of Ants", "Redesign Your Logo",  
'Good Day', 'Greener', 'Welcome To Tally Hall', "Taken for a Ride", "The Bidding", 'Be Born', "Banana Man", 'Just Apathy', 'Spring And A Storm', "Two Wuv", 'Haiku', 'The Whole World And You', '13', "Ruler Of Everything", 'Hidden In The Sand', 'Mucka Blucka', 'Dream', 'Never Meant To Know', '&', "You & Me", 'Cannibal', 'Who You Are', "Sacred Beast", 'Hymn For A Scarecrow', "A Lady", 'The Trap', 'Turn The Lights Off', "Misery Fell", 'Out In The Twilight', 'You', 'Fate Of The Stars',
"Clint Eastwood", "Man Research (Clapper)", "Double Bass", "19-2000",
"Rock The House", "Tomorrow Comes Today", "Rockit", "We Are The Happy Landfill",
"Detroit", "Last Living Souls", "Kids With Guns", "O Green World", "Dirty Harry", "Feel Good Inc", "El Mañana", "Every Planet We Reach Is Dead", "November Has Come", "All Alone", "White Light", "DARE",
"Fire Coming Out Of The Monkey's Head", "Don't Get Lost In Heaven", "Demon Days",
"Welcome To The World Of The Plastic Beach", "White Flag", "Rhinestone Eyes", "Stylo", "Superfast Jellyfish",
"Empire Ants", "Glitter Freeze", "Some Kind Of Nature", "On Melancholy Hill", "Broken", 'Sweepstakes', "Plastic Beach", "To Binge",
'Cloud Of Unknowing',"Pirate Jet", "Humility", "Tranz", "Hollywood", "Kansas", 'Sorcererz', 'Idaho', 'Lake Zurich', 'Magic City', 'Fire Flies', 'One Percent',"Souk Eye", "Cracker Island", "New Gold", 'Skinny Ape'];

let everySong = [
"Sundial", "Kaleidoskull", "Amnesia Was Her Name", "The Man In Stripes & Glasses", "Marketland", "Gadzooks", 'Knife Fight', "The Only House Thats Not On Fire (Yet)" , "The Ocean", "The Afternoon",
"Spring Heeled Jack", "Being A Rock Star", "The Satirists Love Song","The Machine","Bill Watterson","Something Glowing", "Really Cool Wig", "Two Trucks", "A Mask Of My Own Face", "Everybody Loves Raymond", 
"Jaws", "My Trains", "Brodyquest", "Lifetime Achievement Award", "Touch-Tone Telephone", 'Cabinet Man', "No Eyed Girl", "When He Died", "Sweet Bod", "Eighth Wonder", 'Ancient Aliens', 
"Soft Fuzzy Man", "As Your Father I Expressly Forbid It",  "I Earn My Life", "Reaganomics", 'Man-Made Object', "Spiral Of Ants", "Redesign Your Logo",  
"Taken for a Ride", "The Bidding", "Banana Man", "Two Wuv", "Ruler Of Everything", 'Good Day', 'Greener', 'Welcome To Tally Hall', "Taken for a Ride", "The Bidding", 'Be Born', "Banana Man", 'Just Apathy', 'Spring And A Storm', "Two Wuv", 'Haiku', 'The Whole World And You', '13', "Ruler Of Everything", 'Hidden In The Sand', 'Mucka Blucka', 'Dream', 'Never Meant To Know', '&', "You & Me", 'Cannibal', 'Who You Are', "Sacred Beast", 'Hymn For A Scarecrow', "A Lady", 'The Trap', 'Turn The Lights Off', "Misery Fell", 'Out In The Twilight', 'You', 'Fate Of The Stars',
"Sacred Beast", "A Lady", "Misery Fell", "Clint Eastwood", "Man Research (Clapper)", "Double Bass", "19-2000",
"Rock The House", "Tomorrow Comes Today", "Rockit", "We Are The Happy Landfill",
"Detroit", "Last Living Souls", "Kids With Guns", "O Green World", "Dirty Harry", "Feel Good Inc", "El Mañana", "Every Planet We Reach Is Dead", "November Has Come", "All Alone", "White Light", "DARE",
"Fire Coming Out Of The Monkey's Head", "Don't Get Lost In Heaven", "Demon Days",
"Welcome To The World Of The Plastic Beach", "White Flag", "Rhinestone Eyes", "Stylo", "Superfast Jellyfish",
"Empire Ants", "Glitter Freeze", "Some Kind Of Nature", "On Melancholy Hill", "Broken", 'Sweepstakes', "Plastic Beach", "To Binge",
'Cloud Of Unknowing',"Pirate Jet", "Humility", "Tranz", "Hollywood", "Kansas", 'Sorcererz', 'Idaho', 'Lake Zurich', 'Magic City', 'Fire Flies', 'One Percent',"Souk Eye", "Cracker Island", "New Gold", 'Skinny Ape', "Smooth Criminal", "Bad", "Strawberry Fields Forever",
"Penny Lane", "Sgt Pepper's Lonely Hearts Club Band", "Lucy In The Sky With Diamonds", "A Day In A Life",
"Taxman", "Let It Be", "Come Together", "Because", "Magical Mystery Tour", "Eleanor Rigby", "Help", "Yesterday (Remastered)", "Gangstas Paradise",
"My Castle Town", "Death By Glamour", 'A Gentle Reminder', 'Akaishi', 'Another Land', 'Answer Me My Love', 'Anthem', 'Constantly Changing',
 'Dont Explain', 'Elsa', 'Estate', 'Farewell Farewell', 'First Day Of Spring','Foggy Sunday', "Her", 'Horizont', 'Im Not Myself Anymore', 'Knife In The Water',
'Lonely Woman', 'Map - Compass', 'Melody', 'Misty', 'Miyako', 'Motel Money', 'My Funny Valentine', 'My One And Only Love',
'Naima', 'Night Wispers', 'Obliqua', 'Over The Rainbow', "Release", 'Solace', 'Some Other Time', 'Sondan', 'Special One', 'Stop Fighting',
'Swan Lake', 'Tender Love', 'The Peakocks', 'The Shining Sea', 'Totalerweise', 'Tranquility',
'Under The Sun', 'Unsaid', 'Voyage', 'Waters Edge', 'When Sunny Gets Blue', 'You Make Me Feel Brand New', 
'Youth', 'Youve Changed', 'Unworthy', 'Giving Thanks', 'Prayer', 'Cant Buy Me Love', 'Vacqueyras', 'Down The Memory Lane', 'One Hundred Ways',
'It Could Happen To You', 'I See Your Face Before Me', '2k9 battle jam', '4 Repeating Chords', '8 Bit Adventure', '9-Bit Expedition', 'Acheron', 'Aquatic Jambiance', 'Astro Soda', 'At Teh Disko', 'Badlands', 'Be Gone Mr. Gawne', 'Behemoth', 'Beyond Bounds', 'Bitpop', 'Bright Matter', 'Caps On Hats Off', 'Cartridge', 'Cascade', 'Chip Zeal', 'Circuithead', 'Cloudgazer', 'Collision Event',
'Commando Steve', 'Compass', 'Concrete', 'Corrision City', 'Credits Song For My Death', 'Cronos', 'Damage', 'Dew', 'Dinner Before Dawn', 'Disconnect', 'Dolphins In Space', 'Easy Mode', 
'Ember', 'Escapist', 'Farbror Melker Fixar Fiskdamm', 'Final Blast', 'Flicker', 'Flirt Flirt Oh It Hurts', 'Formed By Glaciers', 'Fox', 'Go For Distance', 'Gravity', 'Helmut Haunter', 'I Inc', 'Icarus', 'In The Halls Of The Usurper', 'Indolence', 
'Jack Russel', 'Juggernaut', 'Leaving Leafwood Forest', 'Live By The Sword', 'Lorgasm', 'Love Is Insecurable', 'Machinery', 'Manarola', 'Mellow', 'Milky Ways', 'Motivation', 'Musraket', 'Only Human', 'Out Of Love', 'Overworld', 'Paracet', 'Parallel Processing', 'Partybolt', 
'Pathfinder', 'Penguin Zombie Apocalypse', 'Pewpewpew', 'Pirate Manners', 'Planet I', 'Planet II', 'Planet III', 'Planet IV', 'Planet V', 'Portabellohead', 'Positive Force', 'Restoration', 'Retro Tune', 'Rip Crystal Visions', 'Ropes',
'Seahorse Dreams', 'Sleet', 'Starlight Eyes', 'Starship Showdown', 'Steampunk Warlord', 'Summits', 'Sunrise', 'Symphony Of A Forgotten Sprite', 'The Alliance', 'The Cairn', 'The Cave The Treasure', 'The Hibernator', 'The Maze Of Mayonnaise',
'The Reaver', 'The See-Through Zone', 'The Spectator', 'Tidal Force', 'To The Sky', 'Toaster', 'Up In My Jam', 'Vindicate Me', 'Virtuoso Sexy', 'Vita', 'Vitamin B12', 'Warm Hugs In Court', 'We Are Wired', 'Zero Gravity Love',
"a cluster of stars", "A Deriva", "A place in my heart", "abundant universe", "Across The Valley", "afloat", "Asatte", "catarse", "celestial space", "cerulean.", "Close Your Eyes", "Cosmogony", "Cradled by the Sea",
"Day's End", "Daydreams", "Deepsleep", "Enchanted", "Endless", "Eternity", "Exploration", "Fairy Dust", "Fallin' Asleep", "Fast Asleep",
"First love", "Gone Fishing", "Gratitude", "Half Light", "If only for a second",
"illuminate","Lisergia", "Looking at the Sky", "Los Andes", "Lost", "Lunar",
"Mantra", "Melancholy", "Melaton", "memorias postumas", "message in a bookshelf", "Midnight Blue", "midnight breeze",
"moon aura", "Motivated (Not)", "my best dream", "Nara", "nebula", "next to you", "Night Sparks", "one year has passed", "Parallax", "precious light", "Quiet Nights", "Reflective",
"Regular quest", "Rest now, my dear", "rest well, my friend", "sacred", "See you later", "shadow drops.", "Shelly beach", "Shut Eye", "simpler times", "Sleep Tight", "sliding between.", "Snowfall",
"Summer of '04", "Sweet dreams", "tenderly", "the universe has moved for us", "Time To Rest", "Together", "True Love", "two years have passed", "Umbra", "Viewfinder", "waterfront", "Weightlessness", "When the leaves stop falling...", "When The Stars Fell",
"Whisper Of The Sea", "Windowpane", "you found me"
]

let everySongLength = everySong.length;
let songIndex = 0;
let i = 0
let shuffledJazz = shuffleArray(jazzArr);
let shuffledLofi = shuffleArray(lofiArr)
let shuffledChiptune = shuffleArray(chiptuneArr);
let shuffledIndie = shuffleArray(OgIndieArr);
let otherCustom
let shuffledCustom
let customPlaylist = [];
let songs = indieArr;
let arrayLength = songs.length;
let isLooping = false;
let shuffleIcon = document.getElementById("shuffleIcon");

function saveAA(){
  localStorage.setItem('test', JSON.stringify(customPlaylist));
  if(localStorage.getItem("test") != null){
    btnCustom.style.visibility = "visible";
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

if(localStorage.getItem("test") == null){
  btnCustom.style.visibility = "hidden";
}

if(localStorage.getItem("test") != null){
  customPlaylist = JSON.parse(localStorage.getItem('test'));
  otherCustom = customPlaylist;
  shuffledCustom = shuffleArray(otherCustom)
}

let playingCustom = false
function custom(){
    if(localStorage.getItem("test") != null){
      customPlaylist = JSON.parse(localStorage.getItem('test'));
      playingChiptune = false;
      playingJazz = false;
      playingIndie = false
      playingLofi = false;
      playingCustom = true; 
      btnCustom.style.visibility = "visible";
      isLooping = false;
      loopBtn.style.color = "#dfdbdf";
      updateBtn(btnJazz, btnChiptune, btnLofi, btnIndie, btnCustom);
      saveAA();
      songIndex = 0;
      songs = customPlaylist;
      arrayLength = songs.length;
      loadSong();
      nextSong();
      prevSong()
    }
}

function addSongToCustomPlaylist(){
  customDiv.innerHTML = "";
  customDiv.style.visibility = "visible";
  queue()
  for (let i = 0; i < everySongLength; i++) {
    let p = document.createElement("li");
    let img = document.createElement("img");
    let currentSong = everySong[i];
    let index
    img.src = `images/${currentSong}.jpg`
    p.innerText = currentSong;
    p.addEventListener("click", function(){
      index = customPlaylist.indexOf(currentSong);
      if(!customPlaylist.includes(currentSong)){
        customPlaylist.push(currentSong); 
        p.style.background = "rgb(189, 189, 189)";
        p.style.color = "#3d3d3d";
        otherCustom = customPlaylist;
        saveAA();
        console.log(`added ${currentSong} to custom playlist`);
        counter = true;
      } 
      
      else{
        customPlaylist.splice(index, 1);
        p.style.background = "#fff";
        p.style.color = "#979797";
        otherCustom = customPlaylist;
        saveAA();
      }
    })
    p.appendChild(img);
    customDiv.appendChild(p);
    if(customPlaylist.includes(currentSong)){
      p.style.background = "rgb(189, 189, 189)";
      p.style.color = "#3d3d3d";
    }
  }
}

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
    playingLofi = false;
    playingJazz = false;
    playingCustom = false;
    playingIndie = false;
    isLooping = false;
    loopBtn.style.color = "#dfdbdf";
    updateBtn(btnCustom, btnJazz, btnLofi, btnIndie, btnChiptune);
    songIndex = 0;
    songs = OgChiptuneArr;
    arrayLength = songs.length;
    loadSong();
    nextSong();
    prevSong()
  }
}

let playingIndie = true
function indie(){
  if(playingIndie === false){
    playingIndie = true;
    playingChiptune = false;
    playingLofi = false;
    playingJazz = false;
    playingCustom = false;
    isLooping = false;
    loopBtn.style.color = "#dfdbdf";
    updateBtn(btnCustom, btnJazz, btnLofi, btnChiptune, btnIndie);
    songIndex = 0;
    songs = indieArr;
    arrayLength = songs.length;
    loadSong();
    nextSong();
    prevSong()
  }
}

let playingLofi = false
function lofi(){
  if(playingLofi === false){
    playingLofi = true;
    playingChiptune = false;
    playingIndie = false;
    playingJazz = false;
    playingCustom = false;
    isLooping = false;
    loopBtn.style.color = "#dfdbdf";
    updateBtn(btnCustom, btnJazz, btnChiptune, btnIndie, btnLofi);
    songIndex = 0;
    songs = OgLofiArr;
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
    playingChiptune = false;
    playingLofi = false;
    playingCustom = false;
    isLooping = false;
    playingIndie = false;
    loopBtn.style.color = "#dfdbdf";
    updateBtn(btnCustom, btnChiptune, btnLofi, btnIndie, btnJazz);
    songIndex = 0;
    songs = OgjazzArr;
    arrayLength = songs.length;
    loadSong();
    nextSong();
    prevSong()
  }
}

function updateBtn(btn, btn1, btn2, btn3, active){
  btn.style.color = "#c6c5c6";
  btn.style.border = "1px solid #c2c2c2";
  btn1.style.color = "#c6c5c6";
  btn1.style.border = "1px solid #c2c2c2";
  btn2.style.color = "#c6c5c6";
  btn2.style.border = "1px solid #c2c2c2";
  btn3.style.color = "#c6c5c6";
  btn3.style.border = "1px solid #c2c2c2";
  active.style.color = "#646161";
  active.style.border = "1px solid #646161";
}

var counter = true

function loadSong(song) {
 if(playingJazz === true){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
  }

  else if(playingChiptune === true){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
  }

  else if(playingLofi === true){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
  }

  else if(playingCustom === true){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
  }

  else if(playingIndie === true){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
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

    else if(playingChiptune === true){
      counter = false;
      shuffledChiptune = shuffleArray(chiptuneArr);
      songs = shuffledChiptune;
      shuffleIcon.style.color = "#646161";
      queue();
    }

    else if(playingLofi === true){
      counter = false;
      shuffledLofi = shuffleArray(lofiArr)
      songs = shuffledLofi;
      shuffleIcon.style.color = "#646161";
      queue();
    }

    else if(playingIndie === true){
      counter = false;
      shuffledIndie = shuffleArray(OgIndieArr)
      songs = shuffledIndie;
      shuffleIcon.style.color = "#646161";
      queue();
    }

    else if(playingCustom === true){
      counter = false;
      otherCustom = customPlaylist;
      shuffledCustom = shuffleArray(otherCustom)
      songs = shuffledCustom;
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

    else if(playingChiptune === true){
      counter = true;
      songs = OgChiptuneArr;
      shuffleIcon.style.color = "#dfdbdf";
      queue();
    }

    else if(playingLofi === true){
      counter = true;
      songs = OgLofiArr;
      shuffleIcon.style.color = "#dfdbdf";
      queue();
    }

    else if(playingIndie === true){
      counter = true;
      songs = indieArr;
      shuffleIcon.style.color = "#dfdbdf";
      queue();
    }

    else if(playingCustom === true){
      counter = true;
      customPlaylist = JSON.parse(localStorage.getItem('test'));
      songs = customPlaylist;
      shuffleIcon.style.color = "#dfdbdf";
      queue();
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
    console.log("now looping")
    loopBtn.style.color = "#646161";
  }
  else{
    loopBtn.style.color = "#dfdbdf";
    console.log("not looping")
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
  if (e.key == " " || e.code == "Space" || e.key == "k" || e.code == "K") {
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