const get = (e) => document.getElementById(e)

const door = get('door')
const beep = get('scanner-beep')
const temp = get('temperature-reading')

beep.volume = 0.1
beep.play()

const temperature = () => {
  let num = Math.random() * 100
  console.log(num)
  let randomTemp = Math.round(num * 10) / 10
  console.log(randomTemp)
}

temperature()

door.addEventListener('click', (event) => {
  door.classList.add('door-animation')
})
