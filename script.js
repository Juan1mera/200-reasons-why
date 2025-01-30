<script>
const slider = document.querySelector('.slider');
let isDragging = false;
let startX;
let currentRotate = 0;

// Eventos para mouse
slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    slider.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    currentRotate += deltaX * 0.3;
    slider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(${currentRotate}deg)`;
    startX = e.clientX;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    slider.style.cursor = 'grab';
});

// Eventos para pantallas táctiles
slider.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    currentRotate += deltaX * 0.3;
    slider.style.transform = `perspective(1000px) rotateX(-16deg) rotateY(${currentRotate}deg)`;
    startX = e.touches[0].clientX;
});

document.addEventListener('touchend', () => {
    isDragging = false;
});
</script>