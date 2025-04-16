import '../CSS/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="nikko">nikko</span>
        <span className="am">am</span>
       </div>
      <ul className="navbar-links">
        <li><a href="https://www.google.com" target="_blank">About</a></li>
        <li><a href="https://www.google.com" target="_blank">Sustainability</a></li>
        <li><a href="https://www.google.com" target="_blank">Insights & News</a></li>
        <li><a href="https://www.google.com" target="_blank">Strategies</a></li>
        <li><a href="https://www.google.com" target="_blank">Funds</a></li>
        <li><a href="https://www.google.com" target="_blank">How to Invest</a></li>
      </ul>
      <div className="navbar-search">
    <input type="text" placeholder="Singapore" />
    <span className="search-icon">🔍</span>
  </div>
    </nav>
    
  );
}
