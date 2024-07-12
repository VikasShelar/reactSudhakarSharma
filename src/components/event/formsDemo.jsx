import React from "react";


export function FormsDemo() {
function submitClick(e){
    e.preventDefault();
    for(var item of e.target){
        if(item.name=="submit"){
            if(item.value=='Insert'){
                console.log("Inserted Record")
                break;
            }
            else{
                console.log("Deleted Record")
            }
        }
    }
   
}

    return (
        <div className="container-fluid">
            <h1>Forms Demo event</h1>
            <form onSubmit={submitClick}>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" name="username" /></dd>
            </dl>
            <button type="submit" value="insert">submit</button>
            <button type="submit" value="delete">Register</button>
            </form>

        </div>
    )
}