import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.css";

const Index = () => {
  return (
    <footer className="footer mt-5">
    <div className="footer-top">
      <div className="footer-logo">
        <h1>ChessMasters</h1>
        <p>Your Ultimate Chess Store</p>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h2>About Us</h2>
          <ul>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/team">Meet the Team</Link></li>
            <li><Link to="/mission">Our Mission</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Products</h2>
          <ul>
            <li><Link to="/chess-sets">Chess Sets</Link></li>
            <li><Link to="/chess-boards">Chess Boards</Link></li>
            <li><Link to="/digital-chess">Digital Chess</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Support</h2>
          <ul>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/shipping">Shipping Info</Link></li>
            <li><Link to="/returns">Returns & Refunds</Link></li>
            <li><Link to="/policy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Follow Us</h2>
          <ul className="social-media">
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://youtube.com">YouTube</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} ChessMasters. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Index
