//For recalling light-mode or dark-mode setting from user's previous session

document.addEventListener('DOMContentLoaded', function() {
    const modeToggle = document.getElementById('modeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    // Load and apply the saved theme preference
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
        document.body.classList.add(savedMode);
        document.querySelector('.container').classList.add(savedMode);
        document.querySelector('.box').classList.add(savedMode);
        if (savedMode === 'dark-mode') {
            modeToggle.checked = true;
            themeIcon.src = 'images/moon.png';
        } else {
            themeIcon.src = 'images/sun.png';
        }
    }

    // Save the theme preference on toggle change
    if (modeToggle) {
        modeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                document.body.classList.remove('light-mode');
                document.querySelector('.container').classList.add('dark-mode');
                document.querySelector('.container').classList.remove('light-mode');
                document.querySelector('.box').classList.add('dark-mode');
                document.querySelector('.box').classList.remove('light-mode');
                localStorage.setItem('theme', 'dark-mode');
                themeIcon.src = 'images/moon.png';
            } else {
                document.body.classList.add('light-mode');
                document.body.classList.remove('dark-mode');
                document.querySelector('.container').classList.add('light-mode');
                document.querySelector('.container').classList.remove('dark-mode');
                document.querySelector('.box').classList.add('light-mode');
                document.querySelector('.box').classList.remove('dark-mode');
                localStorage.setItem('theme', 'light-mode');
                themeIcon.src = 'images/sun.png';
            }
        });
    }
});

