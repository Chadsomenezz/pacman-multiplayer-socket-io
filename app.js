const express = require("express");
const ejs = require("ejs");
const path = require("path");
const app = express();

//socket io
const server = app.listen(8080,()=>console.log("Listening at port 8080"));
const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render('index');
})

io.on('connection',socket =>{
    //will be triggered everytime new player enter the site
    socket.broadcast.emit("newPlayer",{id:socket.id});

    //ghost updated location
    socket.on('moveGhost',data=>{
        socket.broadcast.emit("moveGhost",data);
    })

    //pacman updated location  and send it back to all other clients, except the one who send the data
    socket.on("updatePacman",data=>{
        socket.broadcast.emit("updatePacman",data);
    });

})