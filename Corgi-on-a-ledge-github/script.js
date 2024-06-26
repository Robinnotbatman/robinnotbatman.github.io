const canvas = document.querySelector('canvas');
const secondsCount = document.querySelector('.seconds');
const context = canvas.getContext('2d');
const corgiDimensions = { width: 426 * 1.2, height: 285 * 1.2};
const startTime = Date.now();


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
context.translate(window.innerWidth / 2, window.innerHeight / 2);

const image = new Image();
image.src = 'cute-corgi-no-bg.png';

const loopingCorgis = 40;
const offsetDistance = 120;
let currentOffset = 0;

image.onload = () => {
    startLooping()
}

function draw(offset) {
    context.drawImage(
        image, 
        -corgiDimensions.width / 2 - offset/2, 
        -corgiDimensions.height / 2- offset/2, 
        corgiDimensions.width + offset, 
        corgiDimensions.height + offset
    );
}

function loopDraw() {
    for(let i = loopingCorgis; i >= 1; i--) {
        draw(i * offsetDistance + currentOffset);
    }

    draw(offsetDistance)

    currentOffset ++
    if (currentOffset >= offsetDistance) {
        currentOffset = 0
    }
    const newTime = Math.floor((Date.now() - startTime) / 1000);
    
    secondsCount.innerText = newTime

    requestAnimationFrame(loopDraw)
};

function startLooping() {
    requestAnimationFrame(loopDraw)
}