import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const CreateForms = () => {
  return (
    <>
      <div className="cards__Container">
        <Link to="/view/forms/create/">
          <Card
            className="cards__Img"
            imgSrc="https://img.freepik.com/free-vector/memory-storage-concept-illustration_114360-3888.jpg?w=826&t=st=1674024872~exp=1674025472~hmac=c08220a20f979c09172919e2597b439662d1c9da2db554cdbcb5c3bf875f5b0e"
          >
            <h5 className="cards__Title">Create </h5>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default CreateForms;
