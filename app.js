const express = require("express"),
        app = express();


app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


app.get("/", function(req, res) {
   res.render("index");
});

app.get("/about", function(req, res) {
   res.render("about");
});

app.get("/news", function(req, res) {
   res.render("news");
});



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});



//79ed8eb1271f451c86854ae59c2c0aba      newsapikey