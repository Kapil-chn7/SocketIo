require('dotenv').config()
const express = require('express');
const mongoose= require('mongoose');


const app = express();

const PORT=5000 || process.env.PORT;
const db=require('./database')

const server = app.listen(PORT, async function(err) {
  if(err){
    console.log("err",err)
  }
  await mongoose.connect(process.env.URL,
{
useUnifiedTopology:true,
useNewUrlParser: true
}).then((res)=>{
    console.log("this is connected ");
    console.log('server running on port 5000');
})
.catch(err=>{
    console.log("Datebase is not connected",err)
})

    
});



if(process.env.NODE_ENV=='production'){
  app.use(express.static(__dirname + '/dist/'));
  app.get('/.*/', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
  })
}



var arr=[];
var userNamevalue=null;
const io = require('socket.io')(server);



io.on('connection', (socket) => {
  console.log("user is connected",socket.id);
  
 
    socket.on('userJoined', (msg) => {
      userNamevalue=msg.userName
      
      io.emit('connectedSuccessfully', msg);
      
    });
  socket.on('join', function (data) {
   
     var obj={username:data.username,userId:socket.id};
    arr.push(obj);
   
    socket.join(socket.id); 
  });

  io.sockets.in(socket.id).emit('new_msg', {userid:socket.id});
  


  socket.on('messagetoall', async (msg) => {
    msg.userId=socket.id;
    var arr=new db({messageLogs:msg});
    
    arr.save();
    
    io.emit('messagetoall', msg);
    
  });

   socket.on('disconnect', () => {
    
   
      var userName=null;
      var item = arr.find(item => item.userId === socket.id);
      if(item){
       
     userName=item.username

     
      
      }
   
    
  });
});