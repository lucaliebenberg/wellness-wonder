import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white font-bold border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="/images/gaming-banner.jpg"
            alt="Card"
            height={200}
            style={{opacity: "40%"}}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text text-lg">Discover the Future of Tech</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Explore our latest innovations in electronics and simplify your technology experiences and interactions
                with Wellness Wonder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
