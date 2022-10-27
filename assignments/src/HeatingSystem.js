import React, {useState} from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';  
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {BsThermometerSnow} from "react-icons/bs";
import {BsThermometerSun} from "react-icons/bs"
import {BsThermometerHalf} from "react-icons/bs"

/*
    React JavaScript File
    Author: Manveet Kaur
    Student Id: W0782002
    Date: 2022/10/24
    Filename: HeatingSystem.js
*/
export default function HeatingSystem(){

    const [temp, setTemp] = useState(0);
    const [mode, setMode] = useState("Cold");
    const [unit, setUnit] = useState("C");


function convertTemp(){
    if (unit === "C"){
        setTemp(Math.round((temp * 5/9) + 32),2);
        setUnit("F");}
    if (unit === "F"){
        setTemp(Math.round((temp - 32) * 5/9),2);
        setUnit("C");}
}

return(
<Container maxWidth="sm">
<Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={1}>
        <Grid item xs={12}>
            <h1>My Heating System</h1>
        </Grid>
        <Grid item xs={12}>
            <h2>Set the current temperature:</h2>
            <h2>{temp} &#176;{unit}</h2>
        </Grid>
        <Grid item xs={12}>
            <Stack spacing={1} direction="row">
                <Button variant="outlined" onClick={()=>{setTemp(temp+1)}}>+</Button> &nbsp;
                <Button variant="outlined" onClick={()=>{setTemp(temp-1)}}>-</Button>
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <h2>Set the mode:</h2>
            <h2>{mode}</h2>
        </Grid>
        <Grid item xs={12}>
            <Stack spacing={1} direction="row">
                <Button variant="outlined" onClick={()=>{setMode("Cold")}}><BsThermometerSnow /></Button> &nbsp;
                <Button variant="outlined" onClick={()=>{setMode("Heat")}}><BsThermometerSun /></Button> &nbsp;
                <Button variant="outlined" onClick={()=>{setMode("Auto")}}><BsThermometerHalf/></Button>
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <h2>Set the unit:</h2>
        </Grid>
        <Grid item xs={12}>
            <Stack spacing={1} direction="row">
                <Button variant="outlined" onClick={()=>{setUnit("C")}}>Celsius</Button> &nbsp; 
                <Button variant="outlined" onClick={()=>{setUnit("F")}}>Fahrenheit</Button>
            </Stack>
        </Grid>
        <Grid item xs={12}>
            <Stack spacing={1} direction="row">
                <Button variant="contained" onClick={()=>{convertTemp()}}>Convert the Temp.</Button> 
            </Stack>
        </Grid> 
    </Grid>
</Box>
</Container> 
)}