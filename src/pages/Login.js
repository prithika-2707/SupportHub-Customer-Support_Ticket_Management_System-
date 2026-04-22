import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "admin" && pass === "dobby07") {
      localStorage.setItem("user", "admin");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>SupportHub Login</h2>
        <input placeholder="Username" onChange={(e) => setUser(e.target.value)} /><br /><br />
        <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} /><br /><br />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#ecf0f1" },
  card: { padding: "30px", background: "white", borderRadius: "10px", boxShadow: "0px 0px 10px gray", textAlign: "center" }
};

export default Login;