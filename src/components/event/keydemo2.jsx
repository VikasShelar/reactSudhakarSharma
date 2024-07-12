import React, { useState } from "react"


export function KeyDemo2(){

const [msg,setMsg]=useState('');

const [meterValue,setMeterValue]=useState(1)



function handleFocus(){
setMsg("Password 4 to 15 charcter with uppercase letter")
}

function handleBlur(){
    setMsg('')
}

function handleOnkeyUp(e){
if(e.target.value.match(/(?=.*[A-Z])\w{4,15}/)){
    setMsg("Strong Password")
    setMeterValue(100);

}
else{
    if(e.target.value.length <4){
        setMsg('poor password')
        setMeterValue(20)
       
    }else{
        setMsg('weak password')
        setMeterValue(70)
       
    }
}
}

function getMeterColor(value){
    if(value ==='100'){
        return 'green'
    }
    else if(value=== '70'){
        return 'blue'
    }
    else if(value=== '20'){
        return 'red'
    }
    else{
        return 'gray'
    }
}

    return (
        <div>
            <h1>Verify Password</h1>
            <input type="text" onFocus={handleFocus}  
            onBlur={handleBlur} onKeyUp={handleOnkeyUp}></input>
            <div>
                <meter min='1' max='100'  value={meterValue} style={{width:'200px' ,height:'20px', background:getMeterColor(meterValue)}}></meter>
            </div>
            <div>
                {msg}
            </div>
        </div>
    )
}