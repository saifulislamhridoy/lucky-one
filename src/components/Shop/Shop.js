import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import SelectedIteams from '../SelectedItems/SelectedIteams';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([])
    const [carts, setCarts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleToCart =(product)=>{
        if(carts.length <=3 && !carts.includes(product)){
            const newCart =[...carts, product]
            setCarts(newCart)
        }
        

    }
    return (
        <div className='shop'>
            <div className='product-container'>
            {
                products.map (product => <Products
                     product={product}
                     key={product.id}
                     handleToCart={handleToCart}
                ></Products>)
            }
            </div>
            <div className='product-summary'>
                {
                    carts.map(cart => <SelectedIteams cart={cart} key={cart.id}></SelectedIteams>)
                }
            </div>
            
        </div>
    );
};

export default Shop;