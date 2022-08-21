function setInitialTheme(theme) {
    setTheme(theme);
    toFadeout = 'dark'
    if(theme === 'dark') {
        toFadeout = 'light'
    }
    document.querySelector('.'+toFadeout+"-overlayer .theme-text").style.display = 'none'
    
    document.getElementsByClassName(toFadeout+"-overlayer")[0].style.flex = 0;
}

function setTheme(theme) {
    sessionStorage.setItem('theme',theme);
}