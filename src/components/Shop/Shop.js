import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import RandomItem from '../RandomItem/RandomItem';
import SelectedIteams from '../SelectedItems/SelectedIteams';
import './Shop.css'


const Shop = () => {
    const [products, setProducts]=useState([])
    const [carts, setCarts]=useState([])
    const [item, setItems]=useState([])
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
        else{
            alert('opss')
        }
        

    }
    const chooiseAgain=()=>{
        const newCartEmpty=[]
        setCarts(newCartEmpty)
        setItems(newCartEmpty)
        
    }
    function getRandomItem(arr) {
if(arr.length!==0){
   // get random index value
   const randomIndex = Math.floor(Math.random() * arr.length);
    
   // get random item
   const items = arr[randomIndex];
   const newItem=[items]
   setItems(newItem)
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
            <div className='selected-product'>
                <h4>Selected Bikes</h4>
                {
                    carts.map(cart => <SelectedIteams cart={cart} key={cart.id}></SelectedIteams>)
                   }
                   <div>
                       <h2>random item</h2>
                      {
                          item.map(randomItem=> <RandomItem randomItem={randomItem}></RandomItem>)
                      }
                      <button onClick={()=>chooiseAgain()} className='choose-btn'>Choose agin</button>
                   <button onClick={()=>getRandomItem(carts)} className='random-btn'>Choose 1 for me</button>
                      </div>
                 
                   </div>
                  
                   
            </div>
            
    
    );
};

export default Shop;