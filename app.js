document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const progressBar = document.querySelector('.progress');

    let currentSlide = 0;
    const totalSlides = slides.length;

    // Initialize state
    updateSlide(0);

    // Event Listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    function updateSlide(index) {
        // Remove active class from all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Add active class to current slide
        slides[index].classList.add('active');

        // Update current index
        currentSlide = index;

        // Update Counter
        const currSlideEl = document.getElementById('currSlide');
        const totalSlideEl = document.getElementById('totalSlide');
        if (currSlideEl) currSlideEl.innerText = currentSlide + 1;
        if (totalSlideEl) totalSlideEl.innerText = totalSlides;

        // Update Progress Bar
        const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        // Update Button States
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;

        prevBtn.style.opacity = currentSlide === 0 ? '0.3' : '1';
        nextBtn.style.opacity = currentSlide === totalSlides - 1 ? '0.3' : '1';
    }

    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            updateSlide(currentSlide + 1);
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            updateSlide(currentSlide - 1);
        }
    }
});
