import axios from "axios";
import React, { useState } from "react";

export function KeyDemo() {

    const [userError, setUserError] = useState('')
    const [isUserValid,setIsUserValid]=useState(false);
    const [showPassError, setShowPassError] = useState('d-none')

    function handleUserName(e) {
      if(e.target.value ===""){
        setUserError('User Name Required')
        setIsUserValid(false)
      }
      else{
        axios.get("users.json")
        .then(response=>{
         for(var user of response.data){
             if(user.UserName===e.target.value){
                 setUserError('User Name taken --Try another')
                 setIsUserValid(false);
                 break;
             }
             else{
                 setUserError("User name Available")
                 setIsUserValid(true);
             }
         }
        })
      }
    }

    function handlePassword(e){
        if(e.which>=65 && e.which<=90){
            setShowPassError('d-block');
        }
        else{
            setShowPassError('d-none');
        }
    }

    return (
        <div>
            <h1 className="navbar navbar-dark bg-primary text-center">Register User</h1>
            <dl>
                <dt>UserName</dt>
                <dd><input type="text"  onKeyUp={handleUserName}/></dd>
                <dd className={(isUserValid) ? 'text-success':'text-danger'}>{userError}</dd>
            </dl>
            <dl>
                <dt>Password</dt>
                <dd><input type="password" onKeyPress={handlePassword} /></dd>

                <dd className={showPassError}>
                <span className="bi bi-exclamation-triangle text-warning ">Caps ON</span>
                </dd>
            </dl>
        </div>
    )
}