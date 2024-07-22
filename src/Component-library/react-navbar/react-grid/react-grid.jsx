import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

export function ReactGrid(props){
    return (
        <div className="container-fluid">
            <table className="table table-hover">
            <caption>{props.caption}</caption>
            <thead>
                
            </thead>
            </table>
        </div>
    )
}