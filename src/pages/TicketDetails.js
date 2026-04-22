import React from "react";
import { useParams } from "react-router-dom";

function TicketDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ticket #{id}</h2>
      <p>Description: Sample issue</p>

      <select>
        <option>Open</option>
        <option>In Progress</option>
        <option>Closed</option>
      </select>
    </div>
  );
}

export default TicketDetails;