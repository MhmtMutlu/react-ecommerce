import React from "react"
import "./Navbar.css"

function Navbar() {
    return (
      <React.Fragment>
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              Happy Shop 
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link" aria-current="page" href="/">
                  Home
                </a>
                <a class="nav-link" href="#">
                  Cart
                </a>
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
}

export default Navbar