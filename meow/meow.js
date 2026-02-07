const gif = document.getElementById('gif');
const mainText = document.getElementById('mainText');
const noBtn = document.getElementById('noBtn');
const noMessage = document.getElementById('noMessage');

let noClicks = 0;
let dancingInterval;

function yesClicked() {
  mainText.innerText = 'widzimy się czternastego o dwunastej pod Pręgierzem ; )';
  gif.src = cat2.gif;


  document.getElementById('buttons').style.display = 'none';
  noMessage.style.display = 'none';

  if (!dancingInterval) {
    dancingInterval = setInterval(() => {
      if (gif.src.includes('VGWpu8FH82AAAAAC')) {
        gif.src = cat3.gif;
      } else {
        gif.src = 'https://media1.tenor.com/m/VGWpu8FH82AAAAAC/happy-cat-yippee-cat.gif';
      }
    }, 5000);
  }
}

function noClicked() {
  noClicks++;

  if (noClicks === 1) {
    noBtn.innerText = 'jesteś pewna';
  } else if (noClicks === 2) {
    noBtn.innerText = 'pomyśl jeszcze raz';
  } else if (noClicks === 3) {
    noBtn.innerText = 'na 100%?';
  } else if (noClicks === 4) {
    noBtn.innerText = 'nie';
    noMessage.innerText = 'nie wydaje się dziś nieśmiałe';

    noBtn.onmouseover = function() {
      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * (window.innerHeight - 50);
      noBtn.style.position = 'absolute';
      noBtn.style.left = x + 'px';
      noBtn.style.top = y + 'px';
    };
  }
}

function createHearts() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHearts, 600);

