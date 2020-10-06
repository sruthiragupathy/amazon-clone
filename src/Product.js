import React from "react";
import "./Product.css"


const Product = ({id,title,price,rating,image}) =>{
    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__pricing">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i)=>(
                        <p>🌟</p>
                    ))}
                </div>
            </div>
            <img src = {image} alt=""/>
            <button className="product__btn">Add to basket</button>

        </div>
    )
}


export default Product;