(function(){
  var form=document.getElementById('investorEnquiryForm');
  var status=document.getElementById('investorFormStatus');
  if(!form||!status) return;
  form.addEventListener('submit',function(event){
    event.preventDefault();
    if(!form.checkValidity()){form.reportValidity();return;}
    status.hidden=false;
    status.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
})();
