import React from "react";
import "./Product.css"


const Product = () =>{
    return(
        <div className="product">
            <div className="product__info">
                <p>The Lean Startup</p>
                <p className="product__pricing">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    🌟 
                </div>
            </div>
            <img src = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt=""/>
            <button className="product__btn">Add to basket</button>

        </div>
    )
}


export default Product;