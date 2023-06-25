const express = require('express');
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home", { title: "Home"});
});

app.get("/about", (req, res) => { 
    res.render("about", {title: "About"});
});

app.get("/contact", (req, res) => {
    res.render("contact", {title: "Contact"})
});

app.get("/faq", (req, res) => {
    res.render("faq", {title: "FAQ"})
});

app.use((req, res) => {
    res.status(404).render("error", {title: "Error"});
});

app.listen(5000, () => {
    console.log(`Server running on port 5000`);
});