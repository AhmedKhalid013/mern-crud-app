const mongoose=require('mongoose');
const express=require('express');
const cors=require('cors');
const CrudModel=require('./models/crud');

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ahmed');

app.get('/',(req,res)=>{
    CrudModel.find({})
    .then(resl=>res.json(resl))
    .catch(err=>res.json(err));
})

app.post('/create',(req,res)=>{
    CrudModel.create(req.body)
    .then(data=>res.json(data))
    .catch(err=>res.json(err));

})


app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    CrudModel.findById(id)
    .then(ak=>res.json(ak))
    .catch(err=>res.json(err));
})

app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    CrudModel.findByIdAndUpdate ({_id:id},{Name:req.body.Name,Email:req.body.Email,Roll:req.body.Roll})
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
})

app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    CrudModel.findByIdAndDelete(id)
    .then(data=>res.json(data))
    .catch(err=>res.json(err));
});

app.listen(4001, ()=>{
    console.log("This Server is running on port 4001");
})