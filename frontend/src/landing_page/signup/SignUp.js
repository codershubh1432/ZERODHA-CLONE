import React, { useState } from "react";

function SignUp() {
  return(
 <div className="container my-5">
  <div className="row justify-content-center">
    <div className="col-md-10 col-lg-8">
      <div className="p-4 text-center border-top shadow-sm rounded">

        <h5 className="fw-semibold text-warning mb-3">
           Note
        </h5>

        <p className="text-muted mb-4">
          This is a <strong>learning project</strong>.  
          You can freely explore the dashboard and simulate trading features.
        </p>

        <a
          href="https://zerodha-clone-2-0odu.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success px-4 py-2 fw-semibold"
        >
          Go to Dashboard
        </a>

      </div>
    </div>
  </div>
</div>

   

        );

  }

export default SignUp;
