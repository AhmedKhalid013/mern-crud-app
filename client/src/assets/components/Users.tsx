import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

type User = {
  Name: string;
  Email: string;
  Roll: number;
  _id: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([
    {
      Name: "Ahmed",
      Email: "ahmed@example.com",
      Roll: 1,
      _id: "temp-id"
    }
  ]);

  useEffect(()=>{
    axios.get("http://localhost:4001")
    .then(result=>{
      console.log(result.data);
      setUsers(result.data)})
    .catch(err=>console.log(err));
  },[])

  const handleDelete = (id: string) => {
    axios.delete(`http://localhost:4001/delete/${id}`)
      .then(res => {console.log(res);
        window.location.reload(); // Reload to reflect changes
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <Link to="/create" className="btn btn-primary mb-3">Create User</Link>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Roll #</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Roll}</td>
                  <td>
                    <Link to={`/update/${user._id}`} className="btn btn-danger">Edit</Link>

                    <button className="btn btn-warning" onClick={(e: React.MouseEvent<HTMLButtonElement>) =>handleDelete(user._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
