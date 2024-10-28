const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mustacheExpress = require("mustache-express");
const favicon = require("serve-favicon");
const customerRoutes = require("./customer");
const supplierRoutes = require("./supplier");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.options("*", cors());
app.engine("html", mustacheExpress());
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(favicon(__dirname + "/public/img/favicon.ico"));

// Routes
app.use("/customer", customerRoutes);
app.use("/supplier", supplierRoutes);

// handle 404
app.use(function (req, res, next) {
    res.status(404).render("404", {});
});

// set port, listen for requests
const app_port = process.env.APP_PORT || 80;
app.listen(app_port, () => {
    console.log(`Server is running on port ${app_port}.`);
});
