const image = document.getElementById('image');
const imageArr = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
    './images/6.jpg',
    './images/7.jpg'
]
let imageIndex = 0;
setInterval(() => {
    if (imageIndex >= imageArr.length) {
        imageIndex = 0;
    }
    image.setAttribute('src', imageArr[imageIndex])
    imageIndex++
}, 1000)