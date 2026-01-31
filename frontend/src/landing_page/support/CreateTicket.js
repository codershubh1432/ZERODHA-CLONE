import React from "react";
function CreateTicket() {
  return (
    <div className="container">
      <div className="row mt-5">
        <h1 className="fs-2 text-center">To create a ticket select a relevant topic</h1>
        <div className="col-4 p-8 mt-5">
          <h4 className="">
            <i class="fa fa-plus-circle" aria-hidden="true">
              Account opening
            </i>
          </h4>
          <br />
          <a href="">Open demat account</a>
          <br />
          <br />
          <a href="">Minor demat account</a>
          <br />
          <br />
          <a href="">NRI demat account</a>
          <br />
          <br />
          <a href="">Commodity</a>
          <br />
          <br />
          <a href="">Dematerialisation</a>
          <br />
          <br />
          <a href="">Fund transfer</a>
          <br />
          <br />
          <a href="">MTF</a>
        </div>
        <div className="col-4 p-8 mt-5">
          <h4 className=""><i class="fa fa-envelope-o" aria-hidden="true">Support</i></h4>
          <br />
          <a href="">Contact us</a>
          <br />
          <br />
          <a href="">Support portal</a>
          <br />
          <br />
          <a href="">How to file a complaint</a>
          <br />
          <br />
          <a href="">Status of your complaints</a>
          <br />
          <br />
          <a href="">Bulletin</a>
          <br />
          <br />
          <a href="">Circulars</a>
          <br />
          <br />
          <a href="">Z-Connect blog</a>
          <br />
          <br />
          <a href="">Downloads</a>
        </div>
        <div className="col-4 p-8 mt-5">
          <h4 className=""><i class="fa fa-building" aria-hidden="true">Company</i>
          </h4>
          <br />
            <a href="">About</a>
            <br />
            <br />
            <a href="">Philosophy</a>
            <br />
            <br />
            <a href="">Press and media</a>
            <br />
            <br />
            <a href="">Careers</a>
            <br />
            <br />
            <a href="">Zerodha Cares (CSR)</a>
            <br />
            <br />
            <a href="">Zerodha tech</a>
            <br />
            <br />
            <a href="">Open source</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
