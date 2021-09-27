import React from 'react';
import { deleteFromLocal, setToLocal } from '../../utilities/storage';

const Person = (props) => {
    // console.log(props.person); 
    const {id,title,price} = props.person;
    const handlePurchase = (id)=>{
        setToLocal(id);
    }
    const deletePurchase = (id)=>{
        deleteFromLocal(id);
    }
    return (
        <div style={{background:"lightgreen",margin:"5px",padding:"5px"}}>
            <h3>Id: {id}</h3>
            <h2>Name: {title}</h2>
            <h3>Price: {price}</h3>
            <button onClick={()=>handlePurchase(id)}>Purchase</button>
            <button onClick={()=>deletePurchase(id)}>Delete</button>
        </div>
    );
};

export default Person;