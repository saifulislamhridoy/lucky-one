import React from 'react';
import './RandomItem.css'

const RandomItem = ({randomItem}) => {
    const {name,img}=randomItem
    return (
        <div className='item'>
            <img src={img} alt="" />
          <h2>{name}</h2>  
        </div>
    );
};

export default RandomItem;