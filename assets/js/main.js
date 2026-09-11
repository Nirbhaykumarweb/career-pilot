document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('[data-bs-toggle="offcanvas"]');
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            document.body.classList.toggle('sidebar-open');
        });
    }

    const yearNode = document.getElementById('currentYear');
    if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
    }

    const savedState = localStorage.getItem('careerPilotState');
    if (savedState) {
        const parsed = JSON.parse(savedState);
        const progress = document.querySelectorAll('[data-progress-value]');
        progress.forEach((bar) => {
            const val = parsed[bar.dataset.progressValue];
            if (typeof val === 'number') {
                bar.style.width = val + '%';
            }
        });
    }
});
