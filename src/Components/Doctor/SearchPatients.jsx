import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const SearchPatients = () => {
  return (
    <>
      <div className="cards__Container">
        <Link to="/view/patients/">
          <Card
            className="cards__Img"
            imgSrc="https://img.freepik.com/free-vector/employer-meeting-job-applicant-pre-employment-assessment-employee-evaluation-assessment-form-report-performance-review-concept-illustration_335657-2058.jpg?w=1380&t=st=1674024557~exp=1674025157~hmac=6157e45478de47ce7f17fb936c38e53d4ff0840477a5ca64f6adf62ac32f2bff"
          >
            <h5 className="cards__Title"> Search Records</h5>
          </Card>
        </Link>
      </div>
    </>
  );
};

export default SearchPatients;
