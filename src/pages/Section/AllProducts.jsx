import React from "react";
import { Link } from "react-router-dom";
import ShopProducts from "../../components/ShopProducts";
import { useState,useEffect } from "react";
import axios from "axios";
import Loading from "../../components/Loader/Loading"
const AllProducts = () => {
const[products,setProducts]=useState([]);
const[loading,setLoading]=useState(false);
const getProducts=async ()=>{
setLoading(true)
try {
 const res= await axios.get(process.env.REACT_APP_ALL_PRODUCTS).then(res=>res.data);
 setProducts(res);
} catch (error) {
  console.log(error);
}finally{
  setLoading(false);
}
}
useEffect(()=>{
  getProducts();
},[]);
  return (
    <section className="product-section">
   {loading && <Loading/>}
      <div className="container">
        <div className="row">
          <div className="products-box">
            {
              products.map((item)=>(
                <ShopProducts key={item.id} data={item}/>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
