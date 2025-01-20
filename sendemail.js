// Initialize EmailJS with your User ID
emailjs.init('Dic4G92JpwusQE1YN');  // Replace with your actual EmailJS User ID

// Add event listener to the form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the page from reloading on form submission

    // Send the email via EmailJS
    emailjs.sendForm('service_iywgyne', '__ejs-test-mail-service__', this)  // Replace with your actual Service ID and Template ID
        .then(function(response) {
            console.log('SUCCESS!', response);
            alert('Message sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Message failed to send.');
        });
});
