const  {Server} = require("socket.io")

const io = new Server(8000)

io.on("connection", (socket)=>{
    return console.log("User connected", socket,id)
})