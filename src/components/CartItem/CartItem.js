import React, { useContext } from "react"
import CartContext from "../Store/CartContext"

function CartItem(item) {

    const cartContext = useContext(CartContext)
    const removeItemFromCart = id => {
        cartContext.removeItem(id)
    }

    return (
        <React.Fragment>
            <div className="card" key={item.item.id}>
                <img src={item.item.image} className="card-img-top mb-2 p-2" alt="..." />
                <div className="card-body">
                    <h4 className="card-title"><strong>{item.item.title}</strong></h4>
                    <h5 className="card-text">{item.item.price} $</h5>
                    <h5 className="card-text"><strong>x {item.amount}</strong></h5>
                </div>
                <footer className="mb-2">
                    <button onClick={removeItemFromCart.bind(null, item.item.id)} className="btn btn-danger">Remove Item</button>
                </footer>
            </div> 
    </React.Fragment>
    )
}

export default CartItem