import React from 'react';
import '../CSS/Page2.css';
import Circle from './Circle';
export default function Page2() {
  return (
    <section className="Page2">
      <div className='set'>
      <Circle/>
      </div>
     
      
      <div className="text">
        <h1>Team of unique combination</h1>
        <h2>Global Intelligence</h2>
        <h2>Asian Insights</h2>
        <h2>Local Experience</h2>
        <div className='l'>
        <h3>We transform intelligent insights into innovative, relevant investment opportunities for our clients. Leveraging our unique combination of a global perspective complemented by our Asian DNA, we aspire to create sophisticated and diverse solutions that set new standards in the asset management industry.</h3>
        <div className="link">
  <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
    Learn more about what makes us unique
  </a>
  <span className="circle">&gt;</span>
</div>
</div>
      </div>
    </section>
  );
}
