function menuToggle() {
    var x = document.getElementById('mynavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
    var y = document.getElementById('header');
    if (y.className === '') {
        y.className += 'responsive';
    } else {
        y.className = '';
    }
    var icon = document.querySelector('.icon > i');
    if (icon.className === 'fa-solid fa-bars') {
        icon.className = 'fa-solid fa-x';
    } else {
        icon.className = 'fa-solid fa-bars';
    }

}