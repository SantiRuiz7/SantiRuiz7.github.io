
document.getElementById('send').addEventListener('click', function(){
   document.getElementById('Formulario').style.display = 'block'; 
})

document.getElementById('send').addEventListener('click', function(){
   document.getElementById('close').style.display = 'block'; 
})

document.getElementById('close').addEventListener('click', function(){
   document.getElementById('Formulario').style.display = 'none'; 
})

document.getElementById('close').addEventListener('click', function(){
   document.getElementById('close').style.display = 'none'; 
})

function scrollToElement() {
   const element = document.getElementById("edu");
   element.scrollIntoView({ behavior:"smooth"});
 }

 function scrollToElement() {
   const element = document.getElementById("tec");
   element.scrollIntoView({ behavior:"smooth"});
 }

 function scrollToElement() {
   const element = document.getElementById("obj");
   element.scrollIntoView({ behavior:"smooth"});
 }