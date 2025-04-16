import React from 'react';
import '../CSS/Page7.css';
import CurveLines from './CurveLines';

export default function Page7() {
    
  return (
    
    <section  className="section-page Page7 ">
       <div className="pic">
        <CurveLines />
      </div>
  <div className="left">
    <h2>
      <span className='in'>Invest with</span><br />
      <span className="ni">Nikko AM</span>
    </h2>
  </div>
  <div className="right">
    <h1>Equity <span className="c">&gt;</span></h1>
    <h1>Bond <span className="c">&gt;</span></h1>
    <h1>Multi-Assets <span className="c">&gt;</span></h1>
    <h1>ETFs <span className="c">&gt;</span></h1>
  </div>
</section>
  );
}
