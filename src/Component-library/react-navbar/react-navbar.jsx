import React from "react"


export function ReactNavBar(props){
    return (
          <nav className="p-3 m-2 border border-1 d-flex justify-content-between ">
            <div>
                <span className="h3">{props.BrandName}</span>
            </div>

            <div>
{
    props.MenuItems.map(item=>
        <span className="me-3" key={item}><a>{item}</a></span>
    )
}
            </div>
            <div>
                <div className="input-group">
                    <input type="text" className="form-control" />
                    <button className="bi bi-search btn btn-warning"></button>
                </div>
            </div>
          </nav>
    )
}