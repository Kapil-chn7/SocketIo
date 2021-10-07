const mongoose=require('mongoose');
const Schema=mongoose.Schema({
    messageLogs:Object
},
{collection:"groupmessages"})
const msg=mongoose.model('messageLogs',Schema)
module.exports=msg;