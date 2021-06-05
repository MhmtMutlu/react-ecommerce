import React, { useContext } from "react"
import CartContext from "../../components/Store/CartContext"
import CartItem from "../../components/CartItem/CartItem"
import "./Cart.css"

function Cart() {

    const cartContext = useContext(CartContext)

    return (
        <React.Fragment>
            <div className="container mt-2">
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="d-flex align-items-center">
                    {cartContext.items.map((item) => (
                        <CartItem item={item} amount={item.amount}/>
                    ))}
                    {cartContext.items.length !== 0 && 
                        <div className="card text-dark bg-warning mb-3 totalAmountCart ">
                            <div className="card-header">Total Amount</div>
                            <div className="card-body">
                            <h5 className="card-title">{`${cartContext.totalAmount.toFixed(2)} $`}</h5>
                            </div>
                        </div>
                    }
                    {!cartContext.items.length && 
                        <div className="card text-dark bg-warning mb-3 emptyCart">
                            <div className="card-header">Your Cart is empty!</div>
                            <div className="card-body">
                                <h5 className="card-title">You did not add any product to your cart yet!</h5>
                            </div>
                        </div>
                    }
                    </div>
                </div>
            </div>
             
        </React.Fragment>
        
    )
}

export default Cart