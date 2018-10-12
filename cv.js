
function cacher(monElement, monBouton) {

    var x = document.getElementById(monElement);
    if (x.style.display == 'none') {
        x.style.display = 'block';
        document.getElementById(monBouton).innerHTML = '-';
    } else {
        x.style.display = 'none';
        document.getElementById(monBouton).innerHTML = '+';
    }
}

function mailenvoyer() {
    document.location.href ='mailto:roro@roro.fr'
}

