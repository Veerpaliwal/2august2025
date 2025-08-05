//1. IMPORT AREA
// IMPORT {namedimport1,namedimport2} from some loction/lib
import  { useEffect, useState } from "react";
import TextField from "@mui/material/TextField"; 
import Button from "@mui/material/Button";
import toastr from "toastr";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



// import defaultimport form 'some loction/lib';
import axios from "axios";
// import {IMPORTNAME} from "some library/loction";
import { BASE_URL } from "./library/helper";
import Divider from "@mui/material/Divider";
//2. FUNCTION DEFINACTION AREA
 function Home() {
    //2.1 HOOK VARIABLE
     const [payload, setPlayload] = useState({
                                    "data": {
                                        "car_name": "",
                                        "car_modal": "",
                                    }
     });
    
    const [rows,setRows] = useState([])
   
      useEffect(() => {
      //Runs on every render
      //Runs on every render/page reload
        axios.get(`${BASE_URL}/api/cars`)
        .then(function (response) {
          // handle success
          console.log(response.data.data);
          setRows(response?.data?.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    });
                                                     
    //2.2 FUNCTION DAFINACTION AREA
     // fat arrow function
     let handleChange = (e) => {
         console.log("hiii");
         // object.memeber
         //1. object.property
         //2. object.method()
       console.log(e.target?.value);
       setPlayload({
         ...payload,
         "data": {
           ...payload.data,
           [e?.target?.name]:e?.target?.value
         }
        })
     }

     let saveData = () => {
       console.log(payload);
       // i want call api here
       // axios.post().then().then().then()...catch().(finally);
       // axios.post("url",data,opction).then().catch().(finally);
        



       axios.post(`${BASE_URL}/api/cars`,payload, {
        
       }, {
          headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            }
       }).then(function (response) {
         console.log(response.data);
         toastr.success("Data saved successfully!")
       }).catch().finally();
   }
   
  
    //2.3 RETURN STATEMENT
  return (
    <>
      <TextField onChange={handleChange} name="car_name" id="filled-basic" label="Enter Your Name" variant="filled" />
       <br/>   
      <TextField onChange={handleChange} name="car_modal" id="filled-basic" label="Enter Your Surname" variant="filled" />
      <Button variant="contained" onClick={saveData}>submit</Button>
      
      <Divider />
      
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>car_name</TableCell>
              <TableCell align="right">car_modal</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.car_name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.car_name}
                </TableCell>
                <TableCell align="right">{row.car_modal}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  
  
      
    </>
  );
}

//3. EXPORT AREA
export default Home
 
function createData(car_name,car_modal) {
  return {car_name,car_modal };
}

const rows = [
  createData('XUV700', "2025")
  
];
