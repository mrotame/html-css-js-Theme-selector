function setInitialTheme(theme) {
    setTheme(theme);
    toFadeout = 'dark'
    if(theme === 'dark') {
        toFadeout = 'light'
    }
    document.querySelector('.'+toFadeout+"-overlayer .theme-text").style.display = 'none'
    document.getElementsByClassName(toFadeout+"-overlayer")[0].style.flex = 0;
    document.querySelector('.'+theme+"-overlayer .theme-text").style.color = 'white'
}

function setTheme(theme) {
    sessionStorage.setItem('theme',theme);
}
