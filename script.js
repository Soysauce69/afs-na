// Basic JavaScript - Simple Form Handling

document.addEventListener('DOMContentLoaded', function() {
  
  // Get the contact form
  const contactForm = document.querySelector('form');
  
  // If form exists, handle form submission
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form inputs
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      // Get values from inputs
      const name = nameInput.value;
      const email = emailInput.value;
      const message = messageInput.value;
      
      // Check if fields are empty
      if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
      }
      
      // Check if email has @ symbol
      if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Show success message
      alert('Thank you! Your message has been sent.');
      
      // Clear the form
      contactForm.reset();
    });
  }
  
});
