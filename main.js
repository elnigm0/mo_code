const images = [
    "/* background1.jpg",
    "background2.jpg",
    "background3.jpg",
   
]; */
let currentIndex = 0;
document.addEventListener("DOMContentLoaded", function () {
    const mainSection = document.querySelector(".main,.projects,.contact");
    let currentIndex = 0;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        mainSection.style.backgroundImage = `url(${images[currentIndex]})`;
    }

    // تعيين الخلفية الأولى
    mainSection.style.backgroundImage = `url(${images[currentIndex]})`;

    // تغيير الخلفية كل 5 ثوانٍ
    setInterval(changeBackground, 8000);
});
const slider = document.querySelector('.projects');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // سرعة الحركة
    slider.scrollLeft = scrollLeft - walk;
});
