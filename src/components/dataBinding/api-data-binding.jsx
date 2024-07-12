import axios from "axios";
import React, { useEffect, useState } from "react"


export default function ApiDataBinding(){
const [products,setProducts]=useState([]);

function LoadData(){
   axios.get("products.json").then((response)=>{
    setProducts(response.data)
   })
    
}


useEffect(()=>{
    LoadData();
},[]);
    return (
        <div>
        <h1>Form Data</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                   products.map((product,index) => 
                    <tr key={index}>
                        <td>{product.Name}</td>
                        <td>{product.Price}</td>
                    </tr>
                   )
                
                }
            </tbody>
        </table>


        </div>
    )
}