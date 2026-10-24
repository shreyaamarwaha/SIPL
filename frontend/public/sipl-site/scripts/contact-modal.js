(function(){
  var modal=document.getElementById('siplContactModal');
  var form=document.getElementById('siplContactForm');
  if(!modal) return;
  var closeButtons=modal.querySelectorAll('[data-contact-close]');
  var firstField=form ? form.querySelector('input,select,textarea') : null;
  var lastFocused=null;
  function openModal(){
    lastFocused=document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('sipl-contact-open');
    window.setTimeout(function(){if(firstField) firstField.focus();},30);
  }
  function closeModal(){
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('sipl-contact-open');
    if(lastFocused && typeof lastFocused.focus==='function') lastFocused.focus();
  }
  document.querySelectorAll('a[href="/contact"]').forEach(function(link){
    link.addEventListener('click',function(ev){
      ev.preventDefault();
      ev.stopPropagation();
      openModal();
    });
  });
  closeButtons.forEach(function(button){button.addEventListener('click',closeModal);});
  document.addEventListener('keydown',function(ev){if(ev.key==='Escape' && modal.classList.contains('is-open')) closeModal();});
  if(form){
    form.addEventListener('submit',async function(ev){
      ev.preventDefault();
      var success=document.getElementById('siplContactSuccess');
      if(!form.reportValidity()) return;
      var button=form.querySelector('button[type="submit"]');
      var originalLabel=button.textContent;
      var values=new FormData(form);
      var message='Objective: '+String(values.get('objective')||'Other')+' | Organisation: '+String(values.get('organisation')||'Not provided')+' | '+String(values.get('message')||'');
      button.disabled=true;
      button.textContent='Sending…';
      success.classList.remove('error');
      success.hidden=false;
      success.textContent='Sending your message…';
      try{
        var response=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:String(values.get('name')||'').trim(),email:String(values.get('email')||'').trim(),message:message,website:String(values.get('website')||'')})});
        var result=await response.json();
        if(!response.ok) throw new Error(result.message||'We could not send your message. Please try again.');
        success.textContent='Thank you. Your message has been sent to the SIPL team.';
        form.reset();
      }catch(error){
        success.classList.add('error');
        success.textContent=error.message||'We could not send your message. Please try again shortly.';
      }finally{
        button.disabled=false;
        button.textContent=originalLabel;
      }
    });
  }
})();
