"use client";

import { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #d1d3db;
  padding: 20px;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #d1d3db;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #d1d3db;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  background: var(--color-green);
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export default function BookingCard() {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [attendees, setAttendees] = useState("");

  const handleBooking = () => {
    window.location.href =
      "https://www.peerspace.com/pages/listings/YOUR-LISTING-ID";
  };

  return (
    <Card>
      <h3>Add details to view total price</h3>

      <p>
        ⚡ <strong>$400–$900/hr</strong>
      </p>
      <p>4 hr minimum</p>

      <h4>Date</h4>
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <h4>Start Time</h4>
      <Input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />

      <h4>End Time</h4>
      <Input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />

      <h4>Attendees</h4>
      <Select
        value={attendees}
        onChange={(e) => setAttendees(e.target.value)}
      >
        <option value="">Select</option>
        <option>1–25 people</option>
        <option>26–50 people</option>
        <option>51–100 people</option>
      </Select>

      <Button onClick={handleBooking}>
        Check Availability on PeerSpace
      </Button>

      <p>You won’t be charged yet.</p>
    </Card>
  );
}
