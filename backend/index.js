const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/router');
const http = require('http');

require('dotenv').config();
mongoose.connect('mongodb+srv://skywalk:aBUU2zaejGBhU3P@cluster1.ob5wcgb.mongodb.net/skywalkers',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => console.log("Connected to Database"))
.catch(err => console.error("Some error Occured", err));


const app = express();
const server = http.createServer(app);
//socket io starts here...
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});

io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});
});
//ends here...
app.use(express.json());
app.use(cors());
app.use('/api', router);
app.get("/", (req, res)=>{
    res.json({msg:'welcome to my chatting API'});
})
const port = process.env.PORT || 3000;
app.listen(port, (req, res) =>{
    console.log(`server connected to the port number ${port}`);    
});