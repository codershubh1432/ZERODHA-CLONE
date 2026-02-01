import React from "react";
import { Link } from "react-router-dom";
function HomeHero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="HomeHero" className="mb-5" />
        <h1 className="mt-5">Invest In everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        {/* <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button> */}
        <Link
          to="/signup"
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto", display: "block" }}
        >
          Sign up Now
        </Link>
      </div>
    </div>
  );
}

export default HomeHero;
