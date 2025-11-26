emailjs.init("MudNbBpwqBzqbawIS");

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value, 
    message: document.getElementById("message").value
  };

  emailjs.send("service_ug69kur", "template_3bvwoda", params)
    .then(() => {
      document.getElementById("status").innerHTML = "Email enviado!";
    }, () => {
      document.getElementById("status").innerHTML = "Erro ao enviar.";
    });
});
