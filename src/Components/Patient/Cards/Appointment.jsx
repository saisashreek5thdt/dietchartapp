import React from 'react';
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import appointment from "../../../Assets/images/Services/appointments.jpg"

const Appointment = () => {
  return (
    <>
      <div className="cards__Container">
        <Link to="/view/patient/forms/">
          <Card
            className="cards__Img"
            imgSrc={appointment}
          >
            <h5 className="cards__Title">Appointment</h5>
          </Card>
        </Link>
      </div>
    </>
  )
}

export default Appointment