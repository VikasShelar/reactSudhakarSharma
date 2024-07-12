import React from "react"


export function ObjectType() {

    var products = {
        "Name": "SAMSUNG TV",
        "Price": 20000,
        "Stock": true
     
    }

    return (
        <div className="container-fluid">

            {
                Object.keys(products).map(p=><li key="p">{p}- {products[p]}</li>)
            }
           
        </div>



    )
}