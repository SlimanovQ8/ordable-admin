import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";
import axios from 'axios'
import all_product from '../Assets/all_product';
let index = 4;
const AddProduct = () => {

 

  async function AddSampleProducts() {

    
    console.log("gv")
    const name = all_product[index].name
    const category = all_product[index].category
    const image = all_product[index].image
    const price = all_product[index].price
    const isPopular = all_product[index].isPopular
    index++;
    if(index>= all_product.length )
    index =0;
    try{
  
        await axios.post("http://localhost:8000/addproduct", {
            name:name, image: image, price:price, category: category, isPopular: isPopular
        })
        .then((resp) => console.log(resp))

      
    }
    catch(e){
        alert(e)
    }    
   }

 
  return (
    <div className="addproduct">
     
      <button className="addproduct-btn" onClick={()=>{AddSampleProducts()}}>Add Sample Product</button>
    </div>
  );
};

export default AddProduct;
