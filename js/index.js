//Variáveis Dark Mode e Ligh Mode
const darkMode = document.querySelector('.sun')
const lightMode = document.querySelector('.moon')
const principal = document.querySelector('main')

//Variáveis Ligar e Desligar Som
const soundButton = document.querySelector('.sounds')
const playTimer = document.querySelector('.play')

//Variáveis Timer
const timer = document.querySelector('.timer')
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonaddMinutes = document.querySelector('.addMinutes')
const buttonDecreaseMinutes = document.querySelector('.decreaseMinutes')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let timerTimeOut

//Variáveis Sons
const soundForest = new Audio(
'../assets/forest.mp3'
)
const soundRain = new Audio(
'../assets/rain.mp3'
)
const soundCoffeeshop = new Audio(
'../assets/coffee-shop.mp3'
)
const soundFirePlace = new Audio(
'../assets/fireplace.mp3'
)
const soundsControls = {
    forest:document.querySelector('.forest'),
    rain: document.querySelector('.rain'),
    coffee: document.querySelector('.coffee'),
    fireplace: document.querySelector('.fireplace')
}

//Timer
function countdonw() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
  
      secondsDisplay.textContent = '00';
  
      if (seconds <= 0) {
        seconds = 60
  
        minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
      }
      secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
  
      if (minutes <= 0) {
        return
      }
  
      countdonw()
    }, 1000)
  }
  
  buttonPlay.addEventListener('click', function () {
    if (
      Number(minutesDisplay.textContent) === 0 &&
      Number(secondsDisplay.textContent) === 0
    ) {
      return
    } else {
      countdonw();
    }
  })
   
  buttonStop.addEventListener('click', function () {
    clearTimeout(timerTimeOut)
  })
  
  buttonaddMinutes.addEventListener('click', function () {
    minutesDisplay.textContent = Number(minutesDisplay.textContent) + 5;
  
    if (Number(minutesDisplay.textContent) < 10) {
      minutesDisplay.textContent = String(
        minutesDisplay.textContent.padStart(2, '0')
      );
    }
  });
  
  buttonDecreaseMinutes.addEventListener('click', function () {
    if (Number(minutesDisplay.textContent) >= 5) {
      minutesDisplay.textContent = Number(minutesDisplay.textContent) - 5;
    } else {
      minutesDisplay.textContent = '00';
      secondsDisplay.textContent = '00';
    }
  
    if (Number(minutesDisplay.textContent) < 10) {
      minutesDisplay.textContent = String(
        minutesDisplay.textContent.padStart(2, '0')
      );
    }
  });


//Sounds
    soundForest.loop = true
    soundRain.loop = true
    soundCoffeeshop.loop = true
    soundFirePlace.loop = true

soundsControls.forest.addEventListener('click', () => {
    soundRain.pause()
    soundCoffeeshop.pause()
    soundFirePlace.pause()
    soundForest.play()
})

soundsControls.rain.addEventListener('click', () => {
    soundForest.pause()
    soundCoffeeshop.pause()
    soundFirePlace.pause()
    soundRain.play()
})

soundsControls.coffee.addEventListener('click', () => {
    soundForest.pause()
    soundRain.pause()
    soundFirePlace.pause()
    soundCoffeeshop.play()
})

soundsControls.fireplace.addEventListener('click', () => {
    soundForest.pause()
    soundRain.pause()
    soundCoffeeshop.pause()
    soundFirePlace.play()
})

let isSoundPlaying = false;

function playSound(sound) {
  if (isSoundPlaying) {
      sound.pause();
      isSoundPlaying = false;
  } else {
      sound.play();
      isSoundPlaying = true;
  }
}


//Dark Mode
darkMode.addEventListener('click', () => {
    principal.classList.remove('body')
    principal.classList.add('bodyModeDark')

    timer.classList.remove('timer')
    timer.classList.add('fontModeDark')

    soundButton.classList.remove('sounds')
    soundButton.classList.add('soundsButtons')

    darkMode.classList.add('hide')
    lightMode.classList.remove('hide')
})

//Light Mode
lightMode.addEventListener('click', () => {
    principal.classList.add('body')
    principal.classList.remove('bodyModeDark')

    timer.classList.add('timer')
    timer.classList.remove('fontModeDark')

    soundButton.classList.add('sounds')
    soundButton.classList.remove('soundsButtons')

    darkMode.classList.remove('hide')
    lightMode.classList.add('hide')
})