const sizeUpBtn = document.querySelector('.size-up')
const sizeDownBtn = document.querySelector('.size-down')
const colorBtn = document.querySelector('.color')
const p = document.querySelector('p')

let fontSize = 20

const bigText = () => {
	fontSize += 5
	p.style.fontSize = fontSize + 'px'
}

const smalText = () => {
	fontSize -= 5
	p.style.fontSize = fontSize + 'px'
}

const colorText = () => {
	p.style.color = 'blue'
}

sizeUpBtn.addEventListener('click', bigText)
sizeDownBtn.addEventListener('click', smalText)
colorBtn.addEventListener('click', colorText)
