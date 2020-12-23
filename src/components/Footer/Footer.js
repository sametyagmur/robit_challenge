import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-area">
        <div className="container-fluid">
          <div className="register row">
            <div className="col-lg-9 col-md-9">
              <h4>Robit Register, free account</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical.
              </p>
            </div>
            <div className="footer-register-btn col-lg-3 col-md-3">
              <button className="btn btn-primary" type="button">
                Free Register
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-menu row">
            <div className="footer-menu-left col-lg-5">
              <a href="/menu01">Menu 01</a>
              <a href="/menu01">Menu 02</a>
              <a href="/menu01">Menu 03</a>
            </div>
            <div className="col-lg-2">
              <img
                src={process.env.PUBLIC_URL + "/footerLogo.png"}
                className="footer-logo"
              />
            </div>
            <div className="footer-menu-right col-lg-5">
              <a href="/menu01">Menu 04</a>
              <a href="/menu01">Menu 05</a>
              <a href="/menu01">Menu 06</a>
            </div>
          </div>
          <div className="copyright row">
            <div className="col-lg-12">
              <p>© Copyright 2020. Robit Platform</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
