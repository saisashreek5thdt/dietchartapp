import React from "react";
import { FiGlobe, FiHeart, FiZap, FiSmartphone } from "react-icons/fi";

const features = [
  {
    name: "Competitive exchange rates",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: FiGlobe,
  },
  {
    name: "No hidden fees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: FiHeart,
  },
  {
    name: "Transfers are instant",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: FiZap,
  },
  {
    name: "Mobile notifications",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: FiSmartphone,
  },
];

const Features = () => {
  return (
    <>
      <div className="feature__Container">
        <div className="feature__Auto">
          <div className="feature__Block--Center">
            <h2 className="feature__Heading--Primary-Sub">
              Transactions
            </h2>
            <p className="feature__Heading--Primary">
              A better way to send money
            </p>
            <p className="feature__Heading--Info">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>

          <div className="feature__Box">
            <div className="feature__Grids">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="feature__Flex--Box"
                >
                  <div className="feature__Flex--Item">
                    <feature.icon className="feature__Flex--Icon" aria-hidden="true" />
                  </div>
                  <div className="feature__Flex--Heading">
                    <p className="feature__Flex--Heading-Primary">
                      {feature.name}
                    </p>
                    <p className="feature__Flex--Heading-Info">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
