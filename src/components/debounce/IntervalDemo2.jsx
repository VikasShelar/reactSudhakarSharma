import axios from "axios"
import React, { useCallback, useEffect, useRef, useState } from "react"


export function IntervalDemo2(){

    const [product,setProduct]=useState({})
    const productId=useRef(1)

    function LoadProduct(id){
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>{
            setProduct(res.data)
        })
    }

    function LoadProductAuto(){
        productId.current++;
        axios.get(`https://fakestoreapi.com/products/${productId.current}`)
        .then(res=>{
            setProduct(res.data)
        })
    }

    function PlayClick(){
    //    Thread.current= setInterval(LoadProductAuto,5000)
    }

    function pauseClick(){
        // clearInterval(Thread.current)
    }

    useEffect(()=>{
        LoadProduct(productId.current);
    },[])

function NextClick(){
    productId.current=productId.current+1;
    LoadProduct(productId.current)
}

function PreviuosClick(){
    productId.current=productId.current-1;
    LoadProduct(productId.current)
}


    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="card p-2 w-50 mt-4">
            <div className="card-header text-center">
                {product.title}

            </div>
            <div className="card-body mt-4">
                <div>
                    <button onClick={PreviuosClick}></button>
                </div>
            <img width="358px" src={product.image} height="300"/>
            </div>
            <div>
            <button onClick={NextClick}></button>
            </div>
            <div className="card-footer text-center">
                <button onClick={PlayClick} className="btn btn-primary bi bi-play"></button>
                <button onClick={pauseClick} className="btn btn-danger bi bi-pause"></button>
            </div>
            </div>

        </div>
    )
}