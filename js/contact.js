// Script per il form di contatto
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Qui puoi aggiungere la logica per inviare il form
  // Per ora mostriamo solo un alert di conferma
  const name = document.getElementById("name").value;
  alert(`Grazie ${name}! Il tuo messaggio è stato inviato. Ti risponderò al più presto!`);

  // Reset del form
  contactForm.reset();
});
