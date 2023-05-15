const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

  form.reset();
});
