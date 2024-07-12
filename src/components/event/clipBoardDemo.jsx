import React, { useState } from "react"



export function ClipBoardDemo(){

    const [status,setStatus]=useState('')

    function handleCopy(){
        setStatus('Number Copy')
    }

    function habdleBlur(){
        setStatus("")
    }

    function handlePaste(){
        document.onpaste=()=>{
            return false;
        }
    }
    return (

        <div>
            <dl>
                <h1>Verify Account</h1>
                <dt>Account Number</dt>
                <dd><input type='text' onCopy={handleCopy} onBlur={habdleBlur} /></dd>
               
               <dd>{status}</dd> 
               <dt> Confirm Account Number</dt>
                {/* <dd><input type='text' onPaste={()=>{return false}} /></dd> */}
                <dd><input type='text' onPaste={handlePaste} /></dd>

            </dl>
        </div>
    )
}