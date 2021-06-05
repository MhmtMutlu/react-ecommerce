import React, {useState, useEffect} from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"
import "./ProductDetails.css"

function ProductDetail(props) {
    const location = useLocation()
    const [product, setProduct] = useState([])

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products${location.pathname}`)
            .then(response => {
                setProduct(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <React.Fragment>
            <div className="container mt-3 d-flex justify-content-center">
                <div className="card productDetailCard">
                    <img src={product.image} className="card-img-top mb-2 p-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <h6 className="card-text">{product.price} $</h6>
                    </div>
                    <footer className="mb-2">
                        <a href="#" className="btn btn-success m-3">Add to Cart</a>
                        <a href="/" className="btn btn-secondary">Go to Home</a>
                    </footer>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default ProductDetail