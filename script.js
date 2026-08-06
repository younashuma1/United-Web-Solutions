const menu=document.querySelector('.menu');
const nav=document.querySelector('nav');
if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'));}

document.querySelectorAll('nav a[href^="#"]').forEach(link=>{
  link.addEventListener('click',()=>nav?.classList.remove('open'));
});

const form=document.getElementById('contactForm');
if(form){
  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!form.checkValidity()){form.reportValidity();return;}
    const msg=document.getElementById('formMsg');
    msg.textContent='Thank you! Your inquiry has been received. We will contact you soon.';
    form.reset();
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});
