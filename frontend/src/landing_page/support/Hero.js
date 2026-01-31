import React from 'react';
function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
          <h4>Support Portal </h4>
          <a href="">Track Tickets</a>
        
      </div>
       <div className="row p-3 m-3">
        <div className="col-6 p-3">
            <h1 className="fs-4">Search for an answer</h1>
            <br />
            <input placeholder="How do I activate F&O"/>
            <br />
            <br />
            <a href="">1. Track account opening</a>
            <br />
            <br />
            <a href="">2. Track segment activation</a>
            <br />
            <br />
            <a href="">3. Intraday margins</a>
            <br />
            <br />
            <a href="">4. Kite user manual</a>
            <br />
            <br />
        </div>
        <div className="col-6 p-3">
             <h1 className="fs-4">Featured</h1>
             <br />
              <a href="">1. Track account opening</a>
              <br />
              <br />
            <a href="">2. Track segment activation</a>
            <br />
            <br />
        </div>

        
      </div>
      </section>
      );
}

export default Hero;