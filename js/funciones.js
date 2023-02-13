
function mostrar1(){
    document.getElementById('Persona').style.display = 'inline-block';
}
 function ocultar1(){
    document.getElementById('Persona').style.display = 'none';
 }
 



 function mostrar2(){
    document.getElementById('Exp').style.display = 'inline-block';
}
 function ocultar2(){
    document.getElementById('Exp').style.display = 'none';
  }



  function mostrar3(){
    document.getElementById('Educ').style.display = 'inline-block';
}
 function ocultar3(){
    document.getElementById('Educ').style.display = 'none';
  }

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

document.getElementById('send').addEventListener('click', function(){
   document.getElementById('Formulario').style.display = 'block'; 
})