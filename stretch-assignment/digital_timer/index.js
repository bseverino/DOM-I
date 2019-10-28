let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
let secondOnes = document.getElementById('secondOnes');
let secondTens = document.getElementById('secondTens');
let digits = document.querySelector('.digits');

let btn = document.getElementById('btn');
let reset = document.getElementById('reset');
reset.disabled = true;

function clearAllIntervals() {
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
}

btn.addEventListener('click', (event) => {
    btn.disabled = true;    
    
    secondTens.textContent = 0;
    secondOnes.textContent = 0;
    msHundreds.textContent = 0;
    msTens.textContent = 0;

    window.setTimeout(function(){    
        secondTens.textContent = 1;
        digits.style.color = 'red';
        reset.disabled = false;              
    }, 10000);

    window.setInterval(function(){    
        if (secondTens.textContent == 1) {
            secondOnes.textContent = 0;
        } else if (secondOnes.innerText == 9) {
            secondOnes.textContent = 0;
        } else {
            secondOnes.textContent++;
        }
    }, 1000);

    window.setInterval(function(){    
        if (secondTens.textContent == 1) {
            msHundreds.textContent = 0;
        } else if (msHundreds.innerText == 9) {
            msHundreds.textContent = 0;
        } else {
            msHundreds.textContent++;
        }
    }, 100);

    window.setInterval(function(){    
        if (secondTens.textContent == 1) {
            msTens.textContent = 0;
            clearAllIntervals();
        } else if (msTens.innerText == 9) {
            msTens.textContent = 0;
        } else {
            msTens.textContent++;
        }
    }, 10);
});

reset.addEventListener('click', (event) => {
    btn.disabled = false;
    reset.disabled = true;
    digits.style.color = 'black'; 
    secondTens.textContent = 0;
    secondOnes.textContent = 0;
    msHundreds.textContent = 0;
    msTens.textContent = 0;
});