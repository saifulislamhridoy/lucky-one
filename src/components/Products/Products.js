import React from 'react';
import './Products.css'

const Products = ({product}) => {
    const {name,price,img}=product
    return (
        <div>
          <div className='product'>
             <img src={img} alt="" />
             <h5>Name: {name}</h5>
             <p>Price: {price}</p>
          </div>
        </div>
    );
};

export default Products;