(function(){
  const envelope = document.getElementById('envelope');
  const btn = document.getElementById('openBtn');
  const noteContent = document.querySelector('.note-content');
  if(!envelope || !btn || !noteContent) return;

  // Ensure initial state is closed and content is hidden for assistive tech
  envelope.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  noteContent.setAttribute('aria-hidden', 'true');

  const toggle = () => {
    const isOpen = envelope.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.textContent = isOpen ? 'Cerrar' : 'Abrir';
    noteContent.setAttribute('aria-hidden', String(!isOpen));
  };

  btn.addEventListener('click', toggle);
})();
