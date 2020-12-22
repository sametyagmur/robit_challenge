import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <a href="" className="navbar-brand">
          {" "}
          <img src={process.env.PUBLIC_URL + "/logo.png"} />
        </a>
        
        <button
          type="button"
          className="navbar-toggler custom-toggler collapsed"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
       
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="nav navbar-nav">
            <li className="navbar-item">
              <a className="nav-link" href="/">
                Why Robit?
              </a>
            </li>
            <li className="navbar-item">
              <a className="nav-link" href="/team">
                Team
              </a>
            </li>
            <li className="navbar-item">
              <a className="nav-link" href="/explore">
                Explore
              </a>
            </li>
          </ul>
          <form className="navbar-form ml-auto">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                name="search"
              />
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
          <div className="register-btn">
         <button className="sign-in btn btn-primary" type="button">Sign in</button>
         <button className="sign-up btn btn-primary" type="button">Sign up</button>
         </div>
        </div>
        
      </nav>
    );
  }
}

export default Navbar;
