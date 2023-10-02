const express = require('express');
const axios = require('axios');
var cors = require('cors')
const {setupLogging} = require("./logging");
const {setupProxies} = require("./proxy");
const {ROUTES} = require("./routes");
const PORT = 8000;

const app = express();
app.use(cors())


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

    if(req.url == '/ui/v1/auth/login') {
      console.log("DATA", res.data)
    }

    next();
});

setupLogging(app);
setupProxies(app, ROUTES);

 
app.listen(PORT, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Server listening on PORT", PORT);
});
