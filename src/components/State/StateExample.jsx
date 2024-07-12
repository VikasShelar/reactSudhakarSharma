import React, { useEffect, useState } from "react"

export function StateExample() {


// const [Name,setName]=useState("Vikas");
   
const [product,setProduct]=useState({Name:'',Price:0,City:'',Stock:false})
const [form,setForm]=useState({Name:'',Price:0,City:'',Stock:false})

// function onDisplay(e){
//     setName(e.target.value)
// }


useEffect(()=>{

},[]);

function handleName(e){
    setProduct({
        Name:e.target.value,
        Price:product.Price,
        City:product.City,
        Stock:product.Stock,
    })
}


function handlePrice(e){
    setProduct({
        Price:e.target.value,
        City:product.City,
        Stock:product.Stock,
        Name:product.Name
        
    })
}

function handleCities(e){
    setProduct({
        City:e.target.value,
        Price:product.Price,
        Stock:product.Stock,
        Name:product.Name


    })
}

function handleStock(e){
    setProduct({
        Stock:e.target.checked,
        Name:product.Name,
        Price:product.Price,
        City:product.City

    })
}


function handleSubmitClick(){
    setForm(product);
    
}

return (
        <div>
            <div>
<h1>One way binding and Two way binding </h1>
<dl>
<dt>Name</dt>
<dd> <input type="text" onChange={handleName}  /> </dd>

<dt>Price</dt>
<dd> <input type="text" onChange={handlePrice} /> </dd>

<dt>Shipped To</dt>
<dd><select onChange={handleCities} >
    <option>Delhi</option>
    <option>Pune</option>
    <option>Mumbai</option>
        </select></dd>

        <dt>Stock</dt>
        <dd>
            <input type="checkbox" onChange={handleStock} />
            <label>Available</label>
        </dd>
</dl>
        </div>
<button onClick={handleSubmitClick}>Submit</button>

        <div>
<h1>Product Details</h1>
            <dl>
<dt>Name</dt>
<dd>{form.Name}</dd>

<dt>Price</dt>
<dd>{form.Price}</dd>

<dt>Shipped to</dt>
<dd>{form.City}</dd>

<dt>Stock</dt>
<dd>{(form.Stock == true) ? "Available" : "Not in available"}</dd>
            </dl>
        </div>
</div>


    )
}