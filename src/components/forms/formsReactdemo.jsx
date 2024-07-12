import React, { useState } from "react"


export function FormsReactDemo() {

const [amount ,setAmount]=useState(100000)
const [year ,setYear]=useState(1)
const [rate ,setRate]=useState(10.45)
const [EMI ,setEMI]=useState(0)

function handleAmountChange(e){
    setAmount(e.target.value)
}

function handleYearChange(e){
    setYear(e.target.value)
}
function handleRateChange(e){
    setRate(e.target.value)
}
function handleCalculateClick(){
    var p=amount;
    var r=rate/12/100;
    var n=year*12;
    var EMI=p*r*Math.pow(1+r,n)/Math.pow(1+r,n)-1
    setEMI(EMI);
}
    return (
        <div className="container-fluid bg-dark text-white">
            <div className="mt-4 p-4">
                <h4 className="text-center">Personal EMI calcaulator</h4>
                <div className="p2=2 bg-light text-dark">
                    <div className="row">
                        <div className="col mt-4 mb-3">
                            Amout you need <input type="text" size="10" />
                        </div>
                        <div className="col mt-4 mb-3">
                            for <input type="text" size="4" />years
                        </div>
                        <div className="col mt-4 mb-3">
                            interest rate <input type="text" size="4" />%
                        </div>

                    </div>
                    <div className="row mt-6">
                        <div className="col"> 
                            100000<input type="range" value={amount} onChange={handleAmountChange} min="100000" max="10000000"  />10000000
                        </div>
                        <div className="col">
                            1<input type="range" value={year} onChange={handleYearChange} min="1" max="5"  />5
                        </div>
                        <div className="col">

                            10.45
                            <input type="range" value={rate} onChange={handleRateChange} min="10.45" max="18.45"  />18.45
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col text-end">
                            <button onClick={handleCalculateClick} className="btn btn-primary">Calculate</button>
                        </div>
                    </div>
                <div className="row mt-4">
                    <div className="col ">
Your monthly installment <b>{Math.round(EMI).toLocaleString('en-in',{style:'currency',currency:'INR'})}</b> for {year} years
                    </div>

                </div>

                </div>
            </div>
        </div>
    )
}