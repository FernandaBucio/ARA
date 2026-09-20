const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menu&&nav){
  menu.addEventListener('click',()=>{
    const open=menu.getAttribute('aria-expanded')==='true';
    menu.setAttribute('aria-expanded',String(!open));
    nav.style.display=open?'none':'flex';
    nav.style.position='absolute';
    nav.style.top='70px';
    nav.style.left='0';
    nav.style.right='0';
    nav.style.padding='18px 24px';
    nav.style.background='var(--cream)';
    nav.style.borderBottom='1px solid var(--line)';
    nav.style.flexDirection='column';
    nav.style.alignItems='stretch';
  });
}
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',()=>{
    if(menu){menu.setAttribute('aria-expanded','false');}
    if(nav&&window.innerWidth<=850) nav.style.display='none';
  });
});
