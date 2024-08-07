import React from "react";
//HOOKS IMPORT//
import { useState,useEffect } from "react";
//COMPONENTS IMPORT//
import ShopProducts from "../../components/ShopProducts";
import Loading from "../../components/Loader/Loading"
//AXIOS IMPORT//
import axios from "axios";


const AllProducts = () => {
//Storing products in the state//
const[products,setProducts]=useState([]);
//Storing loading state//
const[loading,setLoading]=useState(false);
//Function to fetch and set data//
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
//Hooks that ensure a function runs when the page loads//
useEffect(()=>{
  getProducts();
},[]);
  return (
    <section className="all-product-section">
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
