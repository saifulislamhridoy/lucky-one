import React from 'react';

const SelectedIteams = ({cart}) => {
    const {img,name}=cart
    return (
        <div>
            <div>
                <img src={img} alt="" />
                <h5>{name}</h5>
            </div>
        </div>
    );
};

export default SelectedIteams;