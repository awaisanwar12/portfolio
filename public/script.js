const menuToggle = document.querySelector('.menu-toggle');
const sideNav = document.querySelector('.side-nav');
const scrim = document.querySelector('.scrim');
const navLinks = [...document.querySelectorAll('.side-nav nav a')];

function closeMenu(){
  sideNav.classList.remove('open');
  scrim.classList.remove('show');
  menuToggle?.setAttribute('aria-expanded','false');
}
menuToggle?.addEventListener('click',()=>{
  const open = sideNav.classList.toggle('open');
  scrim.classList.toggle('show',open);
  menuToggle.setAttribute('aria-expanded',String(open));
});
scrim?.addEventListener('click',closeMenu);
navLinks.forEach(link=>link.addEventListener('click',closeMenu));

const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting) entry.target.classList.add('in');
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const sections = [...document.querySelectorAll('main section[id], main header[id]')];
const activeObserver = new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting) return;
  navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href') === `#${entry.target.id}`));
}),{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(section=>activeObserver.observe(section));

document.querySelectorAll('.work-card').forEach(card=>{
  card.addEventListener('pointermove',event=>{
    const rect=card.getBoundingClientRect();
    card.style.setProperty('--mx',`${event.clientX-rect.left}px`);
    card.style.setProperty('--my',`${event.clientY-rect.top}px`);
  });
});
