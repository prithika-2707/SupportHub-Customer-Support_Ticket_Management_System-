import React from "react";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>

      <div style={styles.container}>
        <div style={{ ...styles.card, background: "#3498db" }}>Total: 5</div>
        <div style={{ ...styles.card, background: "#f1c40f" }}>Open: 3</div>
        <div style={{ ...styles.card, background: "#2ecc71" }}>Closed: 2</div>
      </div>
    </div>
  );
}

const styles = {
  container: { display: "flex", gap: "20px", marginTop: "20px" },
  card: { padding: "20px", color: "white", borderRadius: "10px", width: "150px", textAlign: "center" }
};

export default Dashboard;