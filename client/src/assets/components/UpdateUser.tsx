import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const UpdateUser = () => {
  const {id}=useParams();

  const [Name, setName] = useState<string>('');
  const [Email, setEmail] = useState<string>('');
  const [Roll, setRoll] = useState<number>(0);

  const navigate=useNavigate();


  const Update=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    axios.put(`http://localhost:4001/updateUser/${id}`,{Name,Email,Roll})
    .then(res=>{
      console.log(res);
      navigate('/')
    })
    .catch(err=>console.log(err));
  }




    useEffect(()=>{
    axios.get(`http://localhost:4001/getUser/${id}`)
    .then(result=>{
      console.log(result);
      setName(result.data.Name);
      setEmail(result.data.Email);
      setRoll(result.data.Roll);
    })
    .catch(err=>console.log(err));
  },[])

  return (
     <>
    <div className="d-flex vh-100 justify-content-center align-item-center">
      <div className="w-50 rounded p-3">
        <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter Name" className="form-control" value={Name} onChange={(e)=>{
                setName(e.target.value)}}/>
          </div>

          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Enter Email" className="form-control" value={Email} onChange={(e)=>{
                setEmail(e.target.value)}} />
          </div>

            <div className="mb-2">
            <label htmlFor="">Role #</label>
            <input type="number" placeholder="Enter Role" className="form-control" value={Roll} onChange={(e)=>{
                setRoll(Number(e.target.value))}} />
          </div>
          <button className="btn btn-primary w-100">Update User</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default UpdateUser;
