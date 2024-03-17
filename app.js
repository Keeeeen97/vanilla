const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        link.classList.add('active');
    })
})
