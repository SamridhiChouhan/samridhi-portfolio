
const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_dkbwqga",   // from EmailJS
      "template_2x4zrhg",  // from EmailJS
      this,
      "pEROYLRfO8_vn8YuV"    // from EmailJS
    )
    .then(
      () => {
        // statusMsg.innerText = "✅ Message sent successfully!";
        alert ("✅ Message sent successfully!")
        form.reset();
      },
      (err) => {
        // statusMsg.innerText = "❌ Failed to send message. Try again later.";
        console.error("Error:", err);
      }
    );
});

// function sendMail (){
//     let params = {
//       name: document.getElementById("name"),
//       email : document.getElementById("email"),
//       subject : document.getElementById("subject"),
//       message : document.getElementById("message")
//     }

//     emailjs.sendForm(" service_dkbwqga", "template_2x4zrhg" ,params).then(alert("Email sent"))
// }

