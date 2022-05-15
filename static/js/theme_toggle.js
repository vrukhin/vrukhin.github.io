const themeChange = (isChecked) => {
    if (isChecked) {
        document.body.setAttribute('dark', '');
        document.getElementById('dark-mode-icon').classList.add('active');
        document.getElementById('light-mode-icon').classList.remove('active');
    } else {
        document.body.removeAttribute('dark');
        document.getElementById('dark-mode-icon').classList.remove('active');
        document.getElementById('light-mode-icon').classList.add('active');
    }
}