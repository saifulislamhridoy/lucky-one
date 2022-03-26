import React from 'react';
import './Products.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Products = ({product}) => {
    const {name,price,img}=product
    return (
        <div>
          <div className='product'>
             <img src={img} alt="" />
             <h5>Name: {name}</h5>
             <p>Price: ${price}</p>
             <button className='btn-cart'>Add To Cart <AiOutlineShoppingCart className='icon'></AiOutlineShoppingCart></button>
          </div>
        </div>
    );
};

export default Products;