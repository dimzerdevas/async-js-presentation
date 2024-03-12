const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors'); 

const app = express();

const whitelist = ["http://localhost:5500", "https://localhost:5500","http://127.0.0.1:5500/", "https://127.0.0.1:5500/"];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});