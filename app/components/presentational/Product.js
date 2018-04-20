import React from 'react';

const Product = (list) => {
    return (
        <div className="product-card">
            <img alt={list.name} src={list.imgsrc}/>
            <div className="pp-container"><span className="pp-name">{list.name}</span><span className="pp-price">{list.price}</span></div>
            <div className="add-to-cart">Add To Cart</div>
        </div>
    );
}

export default Product;