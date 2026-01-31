import React from "react";
function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 texy-center border-top">
        <div className="col-8 p-4">
          <a href="">
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>
          <ul style={{ textAlign:"left", lineHeight:"2.5"}} className="text-muted">
            <li>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
            </li>
            <li>
              Charged only on selling side when trading intraday or on F&O.
            </li>
            <li>
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge.
            </li>
            <li>Important to keep a tab.</li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="">
            <h3 className="fs-5">List of charges</h3>
          </a>
          <ul style={{ textAlign:"left", lineHeight:"2.5"}} className="text-muted">
            <li>Free: 0 | Pro: 249/2399</li>
            <li>Buy & Invest More: 100 | SIP: 10</li>
            <li>Connect: 500 | Personal: Free</li>
            <li>₹ 300 per year, charged quarterly</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
