import React from 'react';
import './Products.css'

const Products = (props) => {
    const {name,price,img}=props.product
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