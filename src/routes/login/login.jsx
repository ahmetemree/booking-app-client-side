import { useContext, useState } from "react";
import Info from "../../components/notification/Info";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { notifications } from "@mantine/notifications";
import { AuthContext } from "../../context/AuthContext";
function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const{updateUser} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const formData = new FormData(e.target);

    e.preventDefault();
    setError("")
    setIsLoading(true)
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      updateUser(res.data)
      // navigate("/login");
      
      
      navigate("/")
      notifications.show({
        title: "Success!",
        message: "User succesfully Logged In!",
      });
    } catch (err) {
      console.log(err);
      setError(err.response.data.Message);
    }
    finally{
      setIsLoading(false)
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}> 
          <h1>Welcome back</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" required placeholder="Password" />
          <button disabled={isLoading}>Login</button>
          {error&& <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
