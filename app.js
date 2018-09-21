const express = require('express'),
        app = express(),
        request = require("request"),
        NewsAPI = require('newsapi');
   

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


app.get("/", function(req, res) {
   res.render("index");
});

app.get("/about", function(req, res) {
   res.render("about");
});

//news api
app.get("/news", function(req, res) {
    request("https://newsapi.org/v2/everything?q=kindness&apiKey=79ed8eb1271f451c86854ae59c2c0aba", function(error, response, body) {
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("news", {data: data});
        }
    });
});






app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});



//79ed8eb1271f451c86854ae59c2c0aba newsapikey