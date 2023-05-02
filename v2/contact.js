const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Here you can add your logic to handle the form submission, such as sending an email or storing the message in a database

  // For now, let's just log the form data to the console
  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

  // Clear the form after submission
  form.reset();
});
