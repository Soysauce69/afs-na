

document.addEventListener('DOMContentLoaded', function() {
  

  const contactForm = document.querySelector('form');
  

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
    
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
     
      const name = nameInput.value;
      const email = emailInput.value;
      const message = messageInput.value;
      

      if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
      }
      

      if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
      }
      

      alert('Thank you! Your message has been sent.');
      

      contactForm.reset();
    });
  }
  
});
