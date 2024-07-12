import React, { createContext, useContext, useState} from "react"



let UserDetailsContext=createContext(null);
export function FirstLevelComponent(){
const user=useContext(UserDetailsContext);
    return (
        <div>
            <h1>First Level component-{user}</h1>
            <SecondLevelComponent />
        </div>
    )
}

export function SecondLevelComponent(){
   
const user=useContext(UserDetailsContext)
    return (
        <div>
            <h1>Second Level component-{user}</h1>
        </div>
    )
}

export function ContextDemo(){  
const [userName,setUserName]=useState('Vikas');
function userChange(e){
    setUserName(e.target.value)
}
    return (
        <div>
            <div>
                UserName:- <input type="text" onChange={userChange}></input>
            </div>

            <UserDetailsContext.Provider value={userName}>
            <h1>Context API - {userName}</h1>
            <FirstLevelComponent />
            </UserDetailsContext.Provider>
        </div>
    )
}