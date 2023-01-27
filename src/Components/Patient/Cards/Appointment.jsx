import React from 'react';
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <>
      <div className="cards__Container">
        <Link to="/view/patient/forms/">
          <Card
            className="cards__Img"
            imgSrc="https://img.freepik.com/free-vector/employee-marking-deadline-day-man-with-pencil-appointing-date-event-making-note-calendar-vector-illustration-schedule-agenda-time-management_74855-8347.jpg?w=1380&t=st=1674817968~exp=1674818568~hmac=96309a4faa61fb5963503cdc3f44c8533e15d49180b5c9bd8778e47b63109b4d"
          >
            <h5 className="cards__Title">Appointment</h5>
          </Card>
        </Link>
      </div>
    </>
  )
}

export default Appointment