import '../CSS/Page1.css';
import CurveLines from './CurveLines';
import Shape from './Shape'; 
export default function Page1() {
  return (
    <section className="Page1">
      <Shape />
      <div className="page1-left">
        <CurveLines />
        
      </div>
      <div className="content-text">
        <h2>Progressive Solutions</h2>
        <h2>Competitive Performance</h2>
        <h2>Global Citizen with Asian DNA</h2>
        <h1>We’re one of Asia’s largest asset managers</h1>
        <div className="learn-more-wrapper">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            Learn more about who you are
          </a>
          <span className="circle-arrow">&gt;</span>
        </div>
      </div>
    </section>
  );
}
