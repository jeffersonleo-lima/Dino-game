const dino = document.querySelector('.dino')
const backGround = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyUp(event){
    if (event.keyCode === 32){
        if (!isJumping) {
            jump();
        }
    }
}

function jump(){

    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            // descendo
            let downInterval = setInterval(() => {
                if (position <=0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                position -= 20;
                dino.style.bottom = position + 'px'; 
                }            
            }, 20); 
        } else {
        // subindo
        position += 20;
        dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus =  document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    console.log(randomTime);

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    backGround.appendChild(cactus);

    let leftInterval = setInterval (() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            backGround.removeChild(cactus);
        } else if ( cactusPosition > 0 && cactusPosition < 60 && position < 60){

            setInterval(leftInterval);
            document.body.innerHTML ='<H1 class = "game-over">Fim de Jogo</H1>'
            } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
            }
    }, 40);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);