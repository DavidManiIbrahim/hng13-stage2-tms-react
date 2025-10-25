import React from "react";
import { Link } from "react-router-dom";
import Wave from "../assets/wave.svg";
import Circle from "../assets/circle.svg";

export default function Landing() {
  return (
    <main className="hero-container">
      <div className="hero-inner container">
        <div className="hero-left">
          <h1>Ticket Management System.</h1>
          <p className="lead">
            A simple multi-framework ticket management System (React version).
            To Create, track and close tickets — with a consistent layout.
          </p>

          <div className="cta-row">
            <Link to="/auth/signup" className="btn">Get Started</Link>
            <Link to="/auth/login" className="btn-outline">Login</Link>
          </div>
        </div>

        <div className="hero-right" aria-hidden="true">
            <img src={Circle} alt="" className="decor-circle decor-1"/>
            
            </div>
        </div>

     
        <div className= "hero-wave" aria-hidden="true" style={{ backgroundImage: `url(${Wave})`, backgroundcolor: "red" }}>
            <svg></svg>
        </div>

     
    </main>
  );
}
