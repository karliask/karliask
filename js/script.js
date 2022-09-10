document.addEventListener('scroll', animate);
var card1 = document.getElementById('card1');
var card2 = document.getElementById('card2');
var card3 = document.getElementById('card3');
var card4 = document.getElementById('card4');
var card5 = document.getElementById('card5');
var card = document.getElementById('timeline');
var cardHeight = card.clientHeight;
var date = document.getElementById('date');
var tech1 = document.getElementById('tech1');
var tech2 = document.getElementById('tech2');
var tech3 = document.getElementById('tech3');
var techHeight = tech1.clientHeight;
var objToday = new Date(),
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear()
var today = curMonth + " " + curYear;
let currentX = 0;
let currentY = 0;
let aimX = 0;
let aimY = 0;
let speed = 0.15;
let arrow = document.getElementById("arrow");
let arrow2 = document.getElementById("arrow2");
let arrow3 = document.getElementById("arrow3");
let arrowup = document.getElementById("arrowup");
let visual = document.getElementById("visual");
let visual2 = document.getElementById("visual2");

function inView() {
  
  var windowHeight = window.innerHeight;
 
  var scrollY = window.scrollY || window.pageYOffset;
  
  var scrollPosition = scrollY + windowHeight;
  var cardPosition = card.getBoundingClientRect().top + scrollY + cardHeight;

  if (scrollPosition > cardPosition) {
    return true;
  }
  
  return false;
}

function inViewt() {
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  var scrollPosition = scrollY + windowHeight;
  var techPosition = tech1.getBoundingClientRect().top + scrollY + techHeight;

  if (scrollPosition > techPosition) {
    return true;
  }

  return false;
}

function animate() {
  if (inView()) {
      card1.classList.add('anim');
      card2.classList.add('anim');
      card3.classList.add('anim');
      card4.classList.add('anim');
      card5.classList.add('anim');
  }
  if(inViewt()) {
    tech1.classList.add('animt');
    tech2.classList.add('animt2');
    tech3.classList.add('animt3');
  }
}

date.innerHTML = today;

const cursorTag = document.querySelector("div.cursor")
const ball = cursorTag.querySelector("div")

const animatet = function () {
  currentX += (aimX - currentX) * speed;
  currentY += (aimY - currentY) * speed;
  ball.style.left = currentX + "px";
  ball.style.top = currentY + "px";

  requestAnimationFrame(animatet)
}

animatet()

arrow.addEventListener('mouseover', function () {
  ball.style.background = 'rgba(0, 0, 0, 0)'
})

arrow.addEventListener('mouseout', function () {
  ball.style.background = '#e16b3f'
})

arrow.addEventListener('click', function (){
  arrowup.style.visibility = 'visible'
})

arrowup.addEventListener('click', function (){
  arrowup.style.visibility = 'hidden'
})

arrow2.addEventListener('mouseover', function () {
  ball.style.background = 'rgba(0, 0, 0, 0)'
})

arrow2.addEventListener('mouseout', function () {
  ball.style.background = '#e16b3f'
})

arrow3.addEventListener('mouseover', function () {
  ball.style.background = 'rgba(0, 0, 0, 0)'
})

arrow3.addEventListener('mouseout', function () {
  ball.style.background = '#e16b3f'
})

arrowup.addEventListener('mouseover', function () {
  ball.style.background = 'rgba(0, 0, 0, 0)'
})

arrowup.addEventListener('mouseout', function () {
  ball.style.background = '#e16b3f'
})

visual.addEventListener('click', function () {
  visual.style.animation = 'rubberBand 2s ease'
})

visual2.addEventListener('click', function () {
  visual2.style.animation = 'rubberBand 2s ease'
})

document.addEventListener("mousemove", function (event) {
  aimX = event.pageX;
  aimY = event.pageY;
})