import React from "react"


export function EventDemo(){
function insertClick(cities,id){
    alert(`${cities}\n${id}`)
}

    return (
        <div>
            <button id="btnId" onClick={(e)=>insertClick(['Delhi','Hyd','Pune'],e.target.id)}>Insert Click</button>
        </div>
    )
}