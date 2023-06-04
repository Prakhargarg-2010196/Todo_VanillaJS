import Controller from "./controller/index.js";
import Model    from "./model/index.js";
import View from "./view/index.js";
app.Controller = new Controller(new Model(), new View());