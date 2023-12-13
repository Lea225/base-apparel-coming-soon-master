function validateEmail() {
  var emailInput = document.getElementById("emailInput");
  var emailError = document.getElementById("emailError");

  // Utilisez une expression régulière simple pour vérifier si l'e-mail est valide
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value === "" || !emailRegex.test(emailInput.value)) {
    emailError.innerHTML = "Please provide a valid email";
    emailInput.classList.add("invalid"); // Ajoute la classe "invalid" pour la bordure rouge
  } else {
    // Si l'e-mail est valide, effacez tout message d'erreur précédent et supprime la classe "invalid"
    emailError.innerHTML = "";
    emailInput.classList.remove("invalid");
  }
}

// Réinitialiser la bordure et le message d'erreur lorsque l'utilisateur commence à saisir
document.getElementById("emailInput").addEventListener("input", function() {
  this.classList.remove("invalid");
  document.getElementById("emailError").innerHTML = "";
});
