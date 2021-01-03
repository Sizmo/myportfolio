const get = (e) => document.getElementById(e)

const door = get('door')
const doorContainer = get('door-container')
const beep = get('scanner-beep')
const temp = get('temperature-reading')
const tempContainer = get('temp-container')
const sanitiseBtn = get('sanitise-btn')
const sanitiseAudio = get('sanitise-audio')

beep.volume = 0.1
beep.play()

const temperature = (min, max) => {
  let num = Math.random() * (max - min) + min
  let randomTemp = Math.round(num * 10) / 10
  temp.textContent = `${randomTemp}°C`
}

setTimeout(timer, 2000)
function timer() {
  temperature(35, 38)
}

let sanitise = false

sanitiseBtn.addEventListener('click', () => {
  sanitise = true
  sanitiseBtn.style.borderColor = 'green'
  sanitiseBtn.textContent = 'WELCOME!'
  sanitiseAudio.play()
  setInterval(doorOpenTimer, 1500)
})

function doorOpenTimer() {
  door.classList.add('door-animation')
  tempContainer.style.display = 'none'
}

door.addEventListener('animationend', () => {
  doorContainer.style.display = 'none'
})
