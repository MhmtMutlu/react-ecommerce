import React, {useState, useEffect, useContext} from "react"
import { useHistory, useLocation } from "react-router-dom"
import "./ProductDetails.css"
import CartContext from "../../components/Store/CartContext"

function ProductDetail() {
    const location = useLocation()
    const [product, setProduct] = useState([])
    const cartContext = useContext(CartContext)
    const history = useHistory()

    const goBackHome = () => {
        history.push("/")
    }

    useEffect(() => {
        const fetchItem = async () => {
          const response = await fetch(
            `https://fakestoreapi.com/products${location.pathname}`
          );
          const data = await response.json();
          const modifiedItem = { ...data, amount: 1 };
          setProduct(modifiedItem);
        };
        fetchItem();
      }, [location]);

    const addItemToCart = (product) => {
        cartContext.addItem(product)
        console.log(product)
        console.log(cartContext)
    };

    return (
        <React.Fragment>
            <div className="container mt-3 d-flex justify-content-center">
                <div className="card productDetailCard" key={product.id}>
                    <img src={product.image} className="card-img-top mb-2 p-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <h6 className="card-text">{product.price} $</h6>
                    </div>
                    <footer className="mb-2">
                        <a onClick={addItemToCart.bind(null, product)} className="btn btn-success m-3">Add to Cart</a>
                        <a onClick={goBackHome} className="btn btn-secondary">Go to Home</a>
                    </footer>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default ProductDetail