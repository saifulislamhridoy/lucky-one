import React from 'react';
import './RandomItem.css'

const RandomItem = ({randomItem}) => {
    const {name,img}=randomItem
    return (
        <div className='item'>
            <img src={img} alt="" />
          <h5>{name}</h5>  
        </div>
    );
};

export default RandomItem;