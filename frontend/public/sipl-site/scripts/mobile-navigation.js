(function(){
  var nav=document.querySelector('.nav');
  if(!nav) return;
  var wrap=nav.querySelector('.wrap');
  var cta=wrap.querySelector('.btn');
  var toggle=document.createElement('button');
  toggle.className='nav-toggle';
  toggle.type='button';
  toggle.setAttribute('aria-label','Open navigation');
  toggle.setAttribute('aria-expanded','false');
  toggle.innerHTML='<span></span><span></span>';
  wrap.insertBefore(toggle,cta);
  function close(){nav.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');}
  toggle.addEventListener('click',function(){var open=nav.classList.toggle('menu-open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
  nav.querySelectorAll('.nav > .wrap > ul a').forEach(function(a){a.addEventListener('click',close);});
  window.addEventListener('resize',function(){if(window.innerWidth>760) close();});
})();
