(function(){
  var toastTimer;
  function showToast(text){
    var t = document.getElementById('preview-toast');
    if(!t){
      t = document.createElement('div');
      t.id = 'preview-toast';
      t.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#10243B;color:#fff;padding:10px 18px;border-radius:999px;font:13px "Plus Jakarta Sans",system-ui,sans-serif;box-shadow:0 10px 30px rgba(16,36,59,.25);z-index:9999;opacity:0;transition:opacity .2s;pointer-events:none;max-width:88vw;text-align:center';
      document.body.appendChild(t);
    }
    t.textContent = text;
    t.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ t.style.opacity = '0'; }, 2000);
  }
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href^="/"]');
    var href = a && a.getAttribute('href');
    var path = href ? href.split(/[?#]/)[0] : '';
    if(a && path !== '/publications' && path !== '/publications/' && path !== '/investors/' && path !== '/investor-enquiry/' && path !== '/sipl/partners/' && path !== '/sipl/join-us/' && path !== '/join-us/' && path !== '/contact/' && !href.startsWith('mailto:')){
      e.preventDefault();
      showToast('Not built in this preview yet — ' + path);
    }
  });
})();
(function(){var pages={home:'page-home',team:'page-team','investor-overview':'page-inv','investor-access':'page-access',investors:'page-inv',trust:'page-trust',contact:'page-contact',hiring:'page-hiring'};var teamIds=['founders','advisors','clinical','work-with-us'];var lastTarget=null;
function selectTeamTab(id){var selected=teamIds.indexOf(id)>-1?id:'founders';document.querySelectorAll('.team-page-tabs a').forEach(function(tab){var active=tab.getAttribute('href')==='#'+selected;if(active)tab.setAttribute('aria-current','location');else tab.removeAttribute('aria-current');});return selected;}
function route(){var h=location.hash.replace('#','')||'home';if(h==='contact'){window.location.replace('/contact/');return;}var finalHome=h==='home-final';var isTeamTab=teamIds.indexOf(h)>-1;var p=pages[h]?h:(finalHome?'home':(isTeamTab?'team':'home'));
var targetId=pages[p];var ids={};Object.keys(pages).forEach(function(k){ids[pages[k]]=true;});
Object.keys(ids).forEach(function(id){document.getElementById(id).hidden=(id!==targetId);});
if(p==='team'){var tab=isTeamTab?h:'founders';selectTeamTab(tab);if(isTeamTab){var panel=document.getElementById(tab);if(panel)panel.scrollIntoView();}else{window.scrollTo(0,0);}}else if(pages[h] || finalHome){window.scrollTo(0,0);}else{var el=document.getElementById(h);if(el)el.scrollIntoView();}
if(finalHome && window.__showSiplFinal){window.__showSiplFinal();}
else if(targetId==='page-home' && lastTarget!==targetId && window.__playSiplIntro){window.__playSiplIntro();}
lastTarget=targetId;}
window.addEventListener('hashchange',route);route();})();

/* Smooth scroll-reveal (progressive enhancement; content stays visible if JS/IO is unavailable) */
(function(){
  if(!('IntersectionObserver' in window)) return;
  var style = document.createElement('style');
  style.textContent = '.reveal-init{opacity:0;transform:translateY(16px);transition:opacity .55s ease,transform .55s ease}.reveal-init.in{opacity:1;transform:none}@media (prefers-reduced-motion:reduce){.reveal-init{opacity:1;transform:none;transition:none}}';
  document.head.appendChild(style);
  var sel = '.sec > .wrap > *, .dark.sec > .wrap > *, .cards3 > div, .cards6 > div, .card, .loop > div';
  var targets = Array.prototype.slice.call(document.querySelectorAll(sel));
  targets.forEach(function(el){
    var r = el.getBoundingClientRect();
    if(r.top < window.innerHeight * 0.9){ return; }
    el.classList.add('reveal-init');
  });
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, {threshold:0.08, rootMargin:'0px 0px -6% 0px'});
  targets.forEach(function(el){ if(el.classList.contains('reveal-init')) io.observe(el); });
})();
