

import React, { useState } from 'react';
import './dataBinding.css';


export function Interview() {

    var menus=["DEV","Testing","Prod","Automation","SIT","UAT","UI"]

    const [menu,setMenu]=useState([]);

    const handleSubmit=(e)=>{
       alert(menu)
    }

    const handleMenus=(e)=>{
        if(e.target.value.startsWith("U")){
            setMenu(e.target.value)
            console.log(e.target.value)
        }
        
    }
       
    

    return (
        <div>
           
            {
             menus.map(p=><dl key={p}>{p}</dl>) 
            }     
            <input type="text" onChange={handleMenus} />
            <button onClick={handleSubmit}>Submit</button>  
                 
        </div>
    );


}




