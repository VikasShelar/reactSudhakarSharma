import React, { useEffect, useState } from "react"

export function StyleDemo(){

    const [errorStyle,setErrorStyle]=useState({border:''});

// useEffect(()=>{
//     setErrorStyle({
//         border:'2px solid red'


//     })
// },[])

function onStyle(e){

    if(e.target.value==''){
        setErrorStyle({
            border:'2px solid red'
        })
    }
    else{
        setErrorStyle({
            border:'2px solid green'
        })
    }
}
    return (
        <div>
            <h1>Style Demo</h1>
          <dl>
            <dt>UserName</dt>
            <dd>
                <input type="text" style={errorStyle}  onChange={onStyle} placeholder="Name Required" />
            </dd>
          </dl>
        </div>
    )
}