import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
import { notifications } from '@mantine/notifications';
import apiRequest from "../../../../api/lib/apiRequest";


function Register() {
  const[error,setError] =useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e)  => {
    const formData = new FormData(e.target);
    
    e.preventDefault()
    setError("")
    setIsLoading(true)
    const username=formData.get("username")
    const email=formData.get("email")
    const password=formData.get("password")
    try{
      const res = await apiRequest.post("/auth/register",{
        username,email,password  
      })
      navigate("/login")
        
        notifications.show({
          title: 'Success!',
          message: "User succesfully saved!",
        })
        
      
    }

    catch(err){
      
      console.log(err);
      setError(err.response.data.Message)
    }

    finally{
      setIsLoading
      (false)
    }
    
    
  };


  return (
    <div className="register">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          
        </form>
       
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
      
    </div>
  );
}

export default Register;
