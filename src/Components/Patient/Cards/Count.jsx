import React from "react";
import { Card } from "flowbite-react";

const Count = () => {
  return (
    <>
      <div className="cards__Container">
        <Card className="cards__Img">
          <div className="cards__Flex--Col">
            <h5 className="cards__Title">Forms Count</h5>
            <div className="cards__Flex--Box">
              <a href="/" className="cards__Flex--Paid">
                New: 6
              </a>
              <a href="/" className="cards__Flex--Info">
                Response: 2
              </a>
            </div>
          </div>
        </Card>
      </div>
      <div className="cards__Container">
        <Card className="cards__Img">
          <div className="cards__Flex--Col">
            <h5 className="cards__Title">Diet Chart Count</h5>
            <div className="cards__Flex--Box">
              <a href="/" className="cards__Flex--Paid">
                New: 5
              </a>
              <a href="/" className="cards__Flex--Info">
                Response: 3
              </a>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Count;
