'use strict';

let score = Number(document.querySelector('.score').textContent);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let tertinggi = Number(highscore.textContent);

  //Game berlangsung
  if (score > 1) {
    //When no input
    if (!guess) {
      displayMessage('⛔ Masukin Angka dulu lah woi!');
    }

    // Melebihi batasan aturan
    else if (guess < 1 || guess > 20) {
      displayMessage('⚠️ Baca pojok kanan atas !');
    }

    //Tebakan benar
    else if (guess === secretNumber) {
      displayMessage('💃Anjay Bener🎉');
      document.querySelector('body').style.backgroundColor = '#60b347';
      number.textContent = secretNumber;
      number.style.width = '30rem';

      //Pengecekan highscore
      if (score > tertinggi) {
        highscore.textContent = score;
        tertinggi = score;
      }
    }

    //Tebakan masih salah
    else if (guess !== secretNumber) {
      displayMessage(
        guess > secretNumber ? '📈 Kurang rendah' : '📉 Kurang tinggi'
      );
      score--;
      document.querySelector('.score').textContent = score;
    }

    // //Tebakan kelebihan
    // else if (guess > secretNumber) {
    //   message.textContent = '📈 Kurang rendah';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // }
    // //Tebakan kerendahan
    // else if (guess < secretNumber) {
    //   message.textContent = '📉 Kurang tinggi';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // }
  }

  //Game Over!
  else {
    displayMessage('💥 Cupu. Coba lagi sana');
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#Ff3b3b';
  }
});

//Reset dan Main lagi
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  number.textContent = '?';
  number.style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
