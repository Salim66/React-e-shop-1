
import React from 'react';
import ReactDOM from 'react-dom';

const Product = (data) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card shadow">
                <img className="product_img" src={ data.product.image } alt="" />
                <div className="card-body">
                    <h3>{ data.product.name }</h3>
                    <p>{ data.product.description.substring(0, 50) + "...." }</p>
                    <small>Price: { (data.product.sell_price == "" || data.product.sell_price == null)? data.product.price : data.product.sell_price }TK</small>
                </div>
            </div>
        </div>
    )
};

export default Product;
