$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        fade:true
    });
});



const triggers= document.querySelectorAll('.menu-trigger');

for(let i = 0; i< triggers.length; i++){
    triggers[i].addEventListener('click',function(e){
        e.preventDefault();
        this.classList.toggle('is-open');
    });
}