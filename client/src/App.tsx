import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateUser from './assets/components/CreateUser';
import Users from "./assets/components/Users"
import UpdateUser from "./assets/components/UpdateUser"
import './App.css';
import './index.css'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/"element={<Users/>}></Route>
      <Route path="/create"element={<CreateUser/>}></Route>
      <Route path="/update/:id" element={<UpdateUser/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
