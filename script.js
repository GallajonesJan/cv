    // ===== Dark / Light Mode Toggle =====
    const themeSwitch = document.getElementById('themeSwitch');
    const body = document.body;

    themeSwitch.addEventListener('change', () => {
      body.classList.toggle('light-mode');
    });