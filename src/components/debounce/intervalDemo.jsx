import React, { useEffect, useState } from "react"


export function IntervalDemo(){

    const [time,setTime]=useState(Date());
    const [msg,setMsg]=useState('')
    function Time(){
        setMsg(time);
    }

    useEffect(()=>{
        Time();
    },[])
    return (
        <div className="container-fluid">
            <h1>Interval Demo - Same task performing repeating and 
                load simulteneously task and process request 
                {msg}
            </h1>
        </div>
    )
}