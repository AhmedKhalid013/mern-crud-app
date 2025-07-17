import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
   const [Name, setName] = useState<string>('');
  const [Email, setEmail] = useState<string>('');
  const [Roll, setRoll] = useState<number>(0);
  const navigate=useNavigate();


    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        axios.post("http://localhost:4001/create",{Name,Email,Roll})
        .then(res=>{console.log(res)
        navigate('/')
        })
        .catch(err=>console.log(err));
    }


  return (
    <>

     <div className="d-flex vh-100 justify-content-center align-item-center">
      <div className="w-50 rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter Name" className="form-control" onChange={(e)=>{
                setName(e.target.value)}}/>
          </div>

          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter Email" className="form-control" onChange={(e)=>{
                setEmail(e.target.value)}}/>
          </div>

            <div className="mb-2">
            <label htmlFor="">Role #</label>
            <input type="number" placeholder="Enter Role" className="form-control" onChange={(e)=>{
                setRoll(Number(e.target.value))}}/>
          </div>
          <button className="btn btn-primary w-100">Create User</button>
        </form>
      </div>
    </div>
    
    </>
  );
}

export default CreateUser;
