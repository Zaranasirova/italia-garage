import React from 'react'
import { MainContext } from '../utils/MainContext';
import { useContext } from 'react';
const AddButton = () => {
  const {addToCart}=useContext(MainContext);
  return (
    <button className="add" onClick={addToCart}>ADD TO CART</button>
  )
}

export default AddButton