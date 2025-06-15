document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Optionally collect values (for future backend or API use)
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Simulate submission success
  document.getElementById("responseMessage").classList.remove("hidden");

  // Optionally clear the form
  this.reset();
});