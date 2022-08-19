const box = document.querySelector('.box')
const img = document.querySelector('.img')
const myPix = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"]
const shakeImg = () => {
    setTimeout(randomImg, 1100)

    img.classList.add('shake-animaton');
}

const randomImg = () => {
    let randomNum = Math.floor(Math.random() * myPix.length);
    img.src = myPix[randomNum];

    img.classList.remove('shake-animaton');
}

box.addEventListener('click', shakeImg)