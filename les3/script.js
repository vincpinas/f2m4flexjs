import * as vars from './var_dump.js';

for(let i = 0; i < 64; i++) {
    let block = document.createElement('span');

    block.className = 'block-item'
    block.id = `block${i}`

    block.style.background = 'white';
    block.style.border = '2px solid black'

    block.addEventListener('mouseover', changeAnimation)
    block.addEventListener('mouseleave', resetAnimation)

    block.addEventListener('click', (e) => {
        if (e.target.style.background == 'blue') {
            e.target.style.background = "white"
        } else {
            e.target.style.background = "blue"
        }
        
        console.log(e.target.style.background)
    });

    vars.blockGrid.appendChild(block);
}

function changeAnimation(e) {
    e.target.style.animationName = 'rubberBand'
    e.target.style.animationDuration = '1s'
}

function resetAnimation(e) {
    setTimeout(() => {
        e.target.style.animation = 'none';
        e.target.style.animation = '';
    }, 900);
}