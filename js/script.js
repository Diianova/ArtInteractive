document.addEventListener("DOMContentLoaded", function() {

var clients = document.querySelectorAll('.all-clients .clients-group');
var currentSlide = 0;
var slideInterval = setInterval(slider,5000);

function slider(){
    clients[currentSlide].className = 'clients-group';
    currentSlide = (currentSlide+1)%clients.length;
    clients[currentSlide].className = 'slide showing';
    console.log(clients[currentSlide].className);
}



});













