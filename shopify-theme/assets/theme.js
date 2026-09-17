(function(){
  var burger = document.getElementById('burger');
  var nav = document.getElementById('main-nav');

  function closeNav(){
    nav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Ouvrir le menu');
    if (window.innerWidth <= 860) { nav.setAttribute('inert', ''); } else { nav.removeAttribute('inert'); }
  }
  function openNav(){
    nav.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    burger.setAttribute('aria-label', 'Fermer le menu');
    nav.removeAttribute('inert');
  }

  burger.addEventListener('click', function(){
    var isOpen = nav.classList.contains('open');
    if (isOpen) { closeNav(); } else { openNav(); }
  });

  nav.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') { closeNav(); }
  });

  window.addEventListener('resize', closeNav);
  closeNav();

  var form = document.getElementById('quote-form');
  var status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      status.textContent = 'Merci, votre demande a bien été envoyée. Nous revenons vers vous rapidement.';
      form.reset();
    });
  }
})();
