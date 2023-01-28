import React from "react";

const GetStarted = () => {
  return (
    <>
      <div className="getstart__Bg--Gray">
        <div className="getstart__Container">
          <h2 className="getstart__Heading">
            <span className="getstart__Heading--Secondary">Ready to dive in?</span>
            <span className="getstart__Heading--Primary">
              Start your free trial today.
            </span>
          </h2>
          <div className="getstart__Flex--Container">
            <div className="getstart__Flex--Inline">
              <a
                href="/"
                className="getstart__Flex--Items-Primary"
              >
                Get started
              </a>
            </div>
            <div className="getstart__Flex--Gap-1 getstart__Flex--Inline">
              <a
                href="/"
                className="getstart__Flex--Items-Secondary"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
