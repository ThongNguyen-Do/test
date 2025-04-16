import React from 'react';
import '../CSS/Page3.css';
import Number from './Number';
import Chart from './Chart';
export default function Page6() {
 
    
  return (
    <section className=" section-page Page3">
            
        <Number />
      
      <div className="page">
        <h1>Our Featured <br></br> Funds</h1>
        <h2>Nikko AM ARK Disruptive <br></br>Innovation Fund</h2>
        <Chart/>
        <div className='line'>
        <span className='nav'>NAV (per 100 shares)</span>
        <span className='money'> ¥196,977</span><br></br>
        </div>
        <div className='line'>
        <span className='nav'>Net Assets</span>
        <span className='money'>7,309,193 million</span><br></br>
        </div>
        <div className='line'>
        <span className='nav'>Day Change</span>
        <span className='money'>- ¥1,094</span><br></br>
        </div>
        <div className='line'>
        <span className='nav'>Issued</span>
        <span className='money'>3,710,686,634 shares</span>
        </div>
        
        
        <div className="ex">
  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
  Explore more funds
  </a>
  <span className="cir">&gt;</span>
</div>
      </div>
    </section>
  );
}
