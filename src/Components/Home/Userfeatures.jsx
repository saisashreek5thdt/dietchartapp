import React from "react";

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];
const Userfeatures = () => {
  return (
    <>
      <div className="userspec__Bg--White">
        <div className="userspec__Container">
          <div>
            <h2 className="userspec__Heading--Primary">
              Technical Specifications
            </h2>
            <p className="userspec__Heading--Info">
              The walnut wood card tray is precision milled to perfectly fit a
              stack of Focus cards. The powder coated steel divider separates
              active cards from new ones, or can be used to archive important
              task lists.
            </p>

            <dl className="userspec__Grid--Left">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="userspec__Border--Top"
                >
                  <dt className="userspec__Grid--Left-Title">{feature.name}</dt>
                  <dd className="userspec__Grid--Left-Info">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="userspec__Grid--Right">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="userspec__Grid--Right-Img"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="userspec__Grid--Right-Img"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="userspec__Grid--Right-Img"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="userspec__Grid--Right-Img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Userfeatures;
