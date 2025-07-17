const mongoose = require('mongoose');
const CrudSchema= new mongoose.Schema({
    Name: String,
    Email: String,
    Roll: Number
});

const CrudModel=mongoose.model('akcrud', CrudSchema);
module.exports=CrudModel;
