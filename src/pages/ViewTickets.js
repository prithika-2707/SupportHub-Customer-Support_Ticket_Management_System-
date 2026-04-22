import React from "react";
import { Link } from "react-router-dom";

const tickets = [
  { id: 1, title: "WiFi not working", category: "IT Support", status: "Open", priority: "High" },
  { id: 2, title: "Bus delay issue", category: "Transport", status: "Closed", priority: "Medium" },
  { id: 3, title: "Exam timetable doubt", category: "Academic", status: "Open", priority: "Low" },
];

function ViewTickets() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>All Tickets</h2>

      {tickets.map((t) => (
        <div key={t.id} style={styles.card}>
          <Link to={`/ticket/${t.id}`} style={styles.title}>
            {t.title}
          </Link>

          <p><b>Category:</b> {t.category}</p>
          <p><b>Status:</b> {t.status}</p>
          <p><b>Priority:</b> {t.priority}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "10px",
    background: "#f9f9f9",
  },
  title: {
    fontWeight: "bold",
    textDecoration: "none",
    color: "#2c3e50",
  },
};

export default ViewTickets;