import React from "react";

const About = () => {
  return (
    <>
      <div className="about__Container">
        <div className="about__Container--Block">
          <div>
            <div className="about__Flex--Box">
              <div className="about__Flex--Div">
                <span className="about__Flex--Text">
                  Announcing our next round of funding.{" "}
                  <a href="/" className="about__Flex--Anchor">
                    <span className="about__Flex--Anchor-Span" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </span>
              </div>
            </div>
            <div>
              <h1 className="about__Heading--Primary">
                Data to enrich your online business
              </h1>
              <p className="about__Heading--Info">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <div className="about__Flex--Box1">
                <a
                  href="/"
                  className="about__Flex--Inline-1"
                >
                  Get started
                  <span className="about__Flex--Inline-1-Span" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
                <a
                  href="/"
                  className="about__Flex--Inline-2"
                >
                  Live demo
                  <span className="about__Flex--Inline-2-Span" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
            <div className="about__Color--Box">
              <svg
                className="about__Color--Shape"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
