import React from "react"



export function MapType() {

   var products=[{
    "Name":"Samsung",
    "Prize":12000
   },{
    "Name":"TV",
    "Prize":13000
   }]

    return (
        <div className="container-fluid">

         <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                 products.map(product=><tr key={product.Name}> <td>{product.Name}</td><td>{product.Prize}</td></tr>)   
                }
            </tbody>
         </table>
           
        </div>



    )
}