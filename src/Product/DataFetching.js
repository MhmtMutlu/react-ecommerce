import React, {useState, useEffect} from "react"
import Product from "./Product"
import axios from "axios"

function DataFetching() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=20')
            .then(response => {
                setProducts(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <React.Fragment>
            <div className="container mt-2">
                <div className="d-flex flex-wrap">
                    {products.map(product => (
                        <Product id={product.id} title={product.title} price={product.price} image={product.image}/>
                    ))}
                </div>
            </div> 
        </React.Fragment>
    )
}

export default DataFetching