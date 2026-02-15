var nav=document.getElementById('mainNav');
window.addEventListener('scroll',function(){if(window.scrollY>40){nav.classList.add('scrolled')}else{nav.classList.remove('scrolled')}});
var sections=['hero','about','rates','contact'];
var navLinks=document.querySelectorAll('.nav-link');
var sO=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){navLinks.forEach(function(l){l.classList.remove('active')});var a=document.querySelector('.nav-link[data-section="'+entry.target.id+'"]');if(a)a.classList.add('active')}})},{threshold:0.3});
sections.forEach(function(id){var el=document.getElementById(id);if(el)sO.observe(el)});
setTimeout(function(){document.querySelectorAll('.hero-anim').forEach(function(el){el.classList.add('show')})},100);
var fO=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting)entry.target.classList.add('visible')})},{threshold:0.1});
document.querySelectorAll('.fade-up').forEach(function(el){fO.observe(el)});
var logo=document.querySelector('.hero-logo-img');
var isSpinning=false;
if(logo){logo.addEventListener('mouseenter',function(){if(!isSpinning){isSpinning=true;logo.classList.add('spinning');setTimeout(function(){logo.classList.remove('spinning');setTimeout(function(){isSpinning=false},100)},600)}})}
