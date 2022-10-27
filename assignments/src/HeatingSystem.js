import React, {useState} from "react";
/*
    React JavaScript File
    Author: Manveet Kaur
    Student Id: W0782002
    Date: 2022/10/27
    Filename: HeatingSystem.js
*/
export default function HeatingSystem(){

    const [temp, setTemp] = useState(0);
    const [mode, setMode] = useState("Cold");
    const [unit, setUnit] = useState("C");


    function convertTemp(){
        if (unit === "C"){
            setTemp((temp * 5/9) + 32);
            setUnit("F");
        }
        if (unit === "F"){
            setTemp((temp - 32) * 5/9);
            setUnit("C");
        }
    }

    return(
    <div>
    <h1>My Heating System</h1>
    <h2>Set the current temperature:</h2>
        <h2>{temp} &#176;{unit}</h2>
        <button onClick={()=>{setTemp(temp+1)}}>+</button> &nbsp;
        <button onClick={()=>{setTemp(temp-1)}}>-</button>
    <hr />
  
    <h2>Set the mode:</h2>
        <h2>{mode}</h2>
        <button onClick={()=>{setMode("Cold")}}>Cold</button> &nbsp;
        <button onClick={()=>{setMode("Heat")}}>Heat</button> &nbsp;
        <button onClick={()=>{setMode("Auto")}}>Auto</button>
    <hr />

    <h2>Set the unit:</h2>
        <button onClick={()=>{setUnit("C")}}>Celsius</button> &nbsp; 
        <button onClick={()=>{setUnit("F")}}>Fahrenheit</button> 
    <hr />

    <button onClick={()=>{convertTemp()}}>Convert the Temp.</button> 
   </div> 
    )
}