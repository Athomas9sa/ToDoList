'use strict'
const http = require("http");

const hostname = "127.0.0.1"; //the LOOP back id, masj you are connected too
const port = 3333; //server, if server is not running you can't pull databases

const es6Renderer = require("express-es6-template-engine"); 
const express = require("express");
const path = require('path');
const morgan = require("morgan");
const logger = morgan("tiny");
const helmet = require("helmet");

const session = require("express-session"); //time out wesite timer
const FileStore = require("session-file-store");
const cookieParser = require("cookie-parser");

const app = express();

app.engine("html", es6Renderer);
app.set("views", "./views"); 
app.set("view engine", "html");

app.use(express.static(path.join(__dirname, "pulic")));
//app.use(express.static("pulic"));
app.use(logger);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(
    session ({
        secret: "not sean's get rad",
        resave: false,
        saveUninitialized: true,
        is_logged_in: false //this belongs to us, it's ours.
        })
    );


const server = http.createServer(app);

server.listen (port, hostname, () => {
    console.log (`server running at http://${hostname}:${port}`)
});

const rootController = require("./routes/index");
const usersController = require("./routes/users");

app.use("/", rootController);
app.use("/users", usersController);
