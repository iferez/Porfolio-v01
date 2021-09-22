const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');

const barras = document.querySelectorAll('.ham span');


ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');

    barras.forEach(child => {child.classList.toggle('animado')});

});

document.getElementById('button-up').addEventListener('click', scrollUp);

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;

    if (currentScroll >0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll /10));
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 500){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}