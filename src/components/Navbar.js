import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>SupportHub</h2>

      <div>
        <Link to="/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/create" style={styles.link}>Create</Link>
        <Link to="/tickets" style={styles.link}>Tickets</Link>
        <button onClick={logout} style={styles.btn}>Logout</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: { display: "flex", justifyContent: "space-between", padding: "15px", background: "#2c3e50", color: "white" },
  link: { color: "white", marginRight: "15px", textDecoration: "none" },
  logo: { margin: 0 },
  btn: { background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }
};

export default Navbar;