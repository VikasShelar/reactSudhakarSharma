import React from "react"
import "./login.css"





export function Login(){

return (
    <React.Fragment>
       <main>
       <form>
        <h1>React Login form</h1>

        <dl>
        <dt>Username</dt>
        <dd><input type="text"></input></dd>

        <dt>Password</dt>
        <dd><input type="password" /></dd>
            
          

        </dl>

<button>Login</button>

        </form>

       </main>

    </React.Fragment>
)




}