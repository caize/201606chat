var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/201606chat');
exports.User = mongoose.model('User',new mongoose.Schema({
   email:String, //邮箱
   avatar:String //头像
}));

exports.Room = mongoose.model('Room',new mongoose.Schema({
   name:String //房间名
}));