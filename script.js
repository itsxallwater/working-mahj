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
var scrollIndicators=document.querySelectorAll('.scroll-indicator');
scrollIndicators.forEach(function(indicator){indicator.addEventListener('click',function(){var nextSection=this.getAttribute('data-next-section');if(nextSection){document.getElementById(nextSection).scrollIntoView({behavior:'smooth'})}})})
var heroScrollIndicator=document.querySelector('.hero .scroll-indicator');
if(heroScrollIndicator){heroScrollIndicator.classList.add('pulse')}
var scrollToTopBtn=document.getElementById('scrollToTop');
var aboutSection=document.getElementById('about');
window.addEventListener('scroll',function(){var scrollY=window.scrollY;if(scrollToTopBtn){if(scrollY>400){scrollToTopBtn.classList.add('visible')}else{scrollToTopBtn.classList.remove('visible')}}if(heroScrollIndicator&&aboutSection){var aboutTop=aboutSection.getBoundingClientRect().top;if(aboutTop<window.innerHeight*0.5){heroScrollIndicator.classList.add('hidden')}else{heroScrollIndicator.classList.remove('hidden')}}});
if(scrollToTopBtn){scrollToTopBtn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})})}
var emailFocusLink=document.getElementById('emailFocusLink');
if(emailFocusLink){emailFocusLink.addEventListener('click',function(e){e.preventDefault();var nameInput=document.querySelector('input[name="name"]');if(nameInput){nameInput.focus();nameInput.scrollIntoView({behavior:'smooth',block:'center'})}})}
var contactForm=document.getElementById('contactForm');
var formStatus=document.getElementById('formStatus');
if(contactForm){contactForm.addEventListener('submit',function(e){e.preventDefault();var submitBtn=this.querySelector('.btn-submit');var originalText=submitBtn.textContent;submitBtn.textContent='Sending...';submitBtn.disabled=true;var formData=new FormData(this);fetch('https://api.web3forms.com/submit',{method:'POST',body:formData}).then(function(response){return response.json()}).then(function(data){if(data.success){formStatus.textContent='Message sent successfully! We\'ll get back to you soon.';formStatus.className='form-status success';contactForm.reset()}else{formStatus.textContent='Oops! Something went wrong. Please try again.';formStatus.className='form-status error'}}).catch(function(error){formStatus.textContent='Oops! Something went wrong. Please try again.';formStatus.className='form-status error'}).finally(function(){submitBtn.textContent=originalText;submitBtn.disabled=false;setTimeout(function(){formStatus.className='form-status';formStatus.textContent=''},5000)})})}
