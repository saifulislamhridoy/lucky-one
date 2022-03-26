import React from 'react';
import './SelectedItems.css'
import {AiFillDelete} from 'react-icons/ai'
const SelectedIteams = ({cart}) => {
    const {img,name}=cart
    return (
        <div className='item-container'>
            <div className='item'>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <div className='item-btn'><AiFillDelete></AiFillDelete></div>
            </div>
        </div>
    );
};

export default SelectedIteams;