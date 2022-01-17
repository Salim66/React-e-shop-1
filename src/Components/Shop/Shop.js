
import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import Product from './Product';
import Sidebar from './Sidebar';
import './product.css';

const Shop = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:8000/products')
        .then( (data) => data.json() )
        .then( (data) => setProduct(data) );

    }, [])

    // console.log(product);

    return (
        <div className="main-section">
            <div className="container my-5">
                <div className="row">
                    <Fragment>
                        <Sidebar />
                    </Fragment>

                    <div className="col-md-9">
                        <div className="shop-card">
                            <div className="row">
                            {
                                product.map( (data) => <Product product={data}></Product> )
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Shop;
