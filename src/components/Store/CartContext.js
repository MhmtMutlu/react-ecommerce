import React from "react"


const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (product) => {},
  removeItem: (id) => {},
});

export default CartContext