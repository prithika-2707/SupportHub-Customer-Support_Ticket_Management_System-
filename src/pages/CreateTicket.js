import React, { useState } from "react";

function CreateTicket() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = () => {
    if (!title || !desc || !category || !priority) {
      alert("Please fill all fields");
      return;
    }

    alert("Ticket Submitted Successfully!");
  };

  return (
    <div style={styles.container}>
      <h2>Create Support Ticket</h2>

      <input
        placeholder="Enter Issue Title"
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />

      <textarea
        placeholder="Describe your issue..."
        onChange={(e) => setDesc(e.target.value)}
        style={styles.textarea}
      />

      <select onChange={(e) => setCategory(e.target.value)} style={styles.input}>
        <option value="">Select Category</option>
        <option>Academic</option>
        <option>Hostel</option>
        <option>Transport</option>
        <option>IT Support</option>
        <option>General</option>
      </select>

      <select onChange={(e) => setPriority(e.target.value)} style={styles.input}>
        <option value="">Select Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button onClick={handleSubmit} style={styles.button}>
        Submit Ticket
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    height: "100px",
    margin: "10px 0",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#2c3e50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default CreateTicket;