import React, { useState } from "react"
import { ReactNavBar } from "../../Component-library/react-navbar/react-navbar";


export function ProgressDemo(){

    const [count,setCount]=useState(1)
    const [ProgressDisplay,setProgressDisplay]=useState('d-block')
    const [ButtonDisplay,setButtonDisplay]=useState('d-block')
    let i=1;
    function Progress(){
        i++;
        setCount(i);
    }

    function LoadClick(){
        setInterval(ProgressDisplay,200)
        setProgressDisplay('d-block')
        setButtonDisplay('d-none')
    }
    return (
      <div>
<header>
    <ReactNavBar BrandName="Shopper" MenuItems={["Home","Shop","Pages","Contacts"]}></ReactNavBar>
</header>

          <div className="d-flex container-fluid justify-content-center align-items-center" style={{height:"100vh"}}>
            <div>
                <button  onClick ={LoadClick} className="btn btn-primary">Load Image</button>
            </div> 
            <div className={ProgressDisplay}>
                <progress min="1" max="100" value={count} style={{height:"30px", width:"200px"}}></progress>
            <p>{count} % completed</p>
            </div>
        </div>
      </div>
    )
}