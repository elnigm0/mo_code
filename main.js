





/*
=============================
=======Start navigation======
=============================
*/
const navigation = document.querySelector('.navigation');

let isDown = false;
let startX;
let scrollLeft;

// عند الضغط على القائمة
navigation.addEventListener('mousedown', (e) => {
  isDown = true;
  navigation.classList.add('active');
  startX = e.pageX - navigation.offsetLeft;
  scrollLeft = navigation.scrollLeft;
});

navigation.addEventListener('mouseleave', () => {
  isDown = false;
  navigation.classList.remove('active');
});

navigation.addEventListener('mouseup', () => {
  isDown = false;
  navigation.classList.remove('active');
});

navigation.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - navigation.offsetLeft;
  const walk = (x - startX) * 2; // السرعة
  navigation.scrollLeft = scrollLeft - walk;
});
/*
=============================
========End navigation=======
=============================
*/





