import React from "react";

// TODO: rename this file, i hate 'main' name
const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white font-bold border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="/images/wellness-banner.jpg"
            alt="Card"
            height={200}
            width={600}
            style={{opacity: "40%"}}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h3 className="card-title fs-1 text text-l-start">
                Elevate Your Well-being with
              </h3>
              <h2 className="card-title fs-1 text text-xxl-start">Wellness Wonders</h2>
              <p className="card-text fs-5 d-none d-sm-block w-[20rem]">
                Discover our holistic approach to health with a curated selection of
                natural supplements, <br/> eco-friendly products,
                and innovative solutions to nurture your mind, body, and spirit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
