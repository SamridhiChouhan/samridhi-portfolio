const express = require("express");
let app = express();
const port = 2020;
const path = require("path");
const ejsMate = require("ejs-mate");
require("dotenv").config();
const { SMTPClient } = require("emailjs");

app.set("view engine", "ejs");

app.engine("ejs", ejsMate);
app.use(express.static("views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("includes/about");
});

app.get("/skills", (req, res) => {
  res.render("includes/skills");
});

app.get("/work", (req, res) => {
  res.render("includes/work");
});

app.get("/contact", (req, res) => {
  res.render("includes/contact");
});

app.post("/email", (req, res) => {
  let { name, email, subject, message } = req.body;
  console.log(req.body);
  let data = [
    {
      name: name,
      email: email,
      subject: subject,
      message: message,
    },
  ];
  console.log(data);

  const client = new SMTPClient({
    user: "samridhi.0101010@gmail.com",
    password: "nfih mrcv xbss hdhj",
    host: "smtp.gmail.com",
    ssl: true, // Use SSL for secure connection
  });

  async function sendMyEmail() {
    try {
      const emailBody = await client.sendAsync({
        text: `   
          message : ${message} 
          from : ${email} 
          name : ${name}
          subject : ${subject}`,

        from: email,
        to: "samridhi.0101010@gmail.com",
        subject: `Website Query from ${name}`,
      });
      console.log("Email sent successfully:", emailBody);
    } catch (err) {
      console.error("Failed to send email:", err);
    } finally {
      client.smtp.close(); // Don't forget to close the connection!
    }
  }

  sendMyEmail();

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
