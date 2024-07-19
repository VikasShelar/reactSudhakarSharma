import React, { useRef, useState } from "react"



export function DeBounceDemo(){
const [msg,setMsg]=useState('')
let flag=useRef(null)
function m1(){
    setMsg("I am First")
}
function m2(){
    setMsg("I am Second")
}
function m3(){
    setMsg("I am Third")
}

function PlayClick(){
    setTimeout(m1,3000);
   flag.current= setTimeout(m2,6000);
    setTimeout(m3,10000);
}
function Pauseclick(){
    clearTimeout(flag.current)
}

    return (
        <div className="container-fluid">
            <div className="mt-4">
           <h1>Debounce Demo</h1> 
           <button onClick={PlayClick} className="bi me-3 bi-play btn btn-warning">Add</button>
           <button  onClick={Pauseclick}   className="bi me-3 bi-pause btn btn-success">Sub</button>
           </div>
           <div>
            <span className="h2">{msg}</span>
           </div>
        </div>
    )
}