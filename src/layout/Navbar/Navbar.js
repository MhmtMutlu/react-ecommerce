import React, { useContext } from "react"
import { useHistory } from "react-router-dom";
import CartContext from "../../components/Store/CartContext";
import "./Navbar.css"

function Navbar() {

    const cartContex = useContext(CartContext)
    const history = useHistory()
    const goToCart = () => {
      history.push("/Cart")
    }
    const goBackHome = () => {
        history.push("/")
    }

    const numberOfCartItems = cartContex.items.reduce((currentNumber, item) => currentNumber + item.amount, 0)

    return (
      <React.Fragment>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" onClick={goBackHome}>
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
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" aria-current="page" onClick={goBackHome}>
                  Home
                </a>
                <a onClick={goToCart} className="nav-link">
                  Cart ({numberOfCartItems})
                </a>
              </div>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
}

export default Navbar