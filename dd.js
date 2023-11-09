const btnYes = document.querySelector('.yes-button');
const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
  }
  
  const btn = document.querySelector('#NO');
  btn.addEventListener('mouseenter', () => {
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
  });
  btn.addEventListener('click', () => {
    alert('Ну и ладно мне больше будет!');
  });
  btnYes.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/watch?v=L3Y8qoUwKPw&ab_channel=DadasMan'; 
  });