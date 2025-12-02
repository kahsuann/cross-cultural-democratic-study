const modalBtns = document.querySelectorAll('.modal-btn');
const closeBtns = document.querySelectorAll('.close');

// When the user clicks the button, open the modal 
modalBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const modalId = this.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    
    if (modal) {
      modal.style.display = 'block';
      document.body.classList.add('modal-open');
    }
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const modal = this.closest('.modal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  });
});

