const express = require("express");
const nunjucks = require("nunjucks");
const path = require('path');
const Model = require("./models/databasemodels")

const app = express();
const port = 8000;

nunjucks.configure("view", { express: app });
app.use(express.static("public"));
app.use(express.json());

app.get("/", async (req, res) => {
    res.render(path.join(__dirname + '/view/main.html'));
});

app.get("/Employee", async (req, res) => {

    res.render(path.join(__dirname + '/view/Employee.html'));
});
app.get("/Addpackage", async (req, res) => {

    res.render(path.join(__dirname + '/view/Add package.html'));
});

app.get("/Employee", async (req, res) => {

    res.render(path.join(__dirname + '/view/Employee.html'));
});

app.get("/Employee", async (req, res) => {

    res.render(path.join(__dirname + '/view/Employee.html'));
});

app.get("/Employee", async (req, res) => {

    res.render(path.join(__dirname + '/view/Employee.html'));
});

app.get("/Employee", async (req, res) => {

    res.render(path.join(__dirname + '/view/Employee.html'));
});

app.get("/Employee", async (req, res) => {

    res.render(path.join(__dirname + '/view/Employee.html'));
});

app.get("/Employee", async (req, res) => {

    res.render(path.join(__dirname + '/view/Employee.html'));
});


app.listen(port, function () {
    console.log(`Server listening on port http://127.0.0.1:${port}!`);
});