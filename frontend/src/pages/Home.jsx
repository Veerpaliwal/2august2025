//1. IMPORT AREA
// IMPORT {namedimport1,namedimport2} from some loction/lib
import  { useState } from "react";
import TextField from "@mui/material/TextField"; 
import Button from "@mui/material/Button";
import toastr from "toastr";


// import defaultimport form 'some loction/lib';
import axios from "axios";
//2. FUNCTION DEFINACTION AREA
 function Home() {
    //2.1 HOOK VARIABLE
     const [payload, setPlayload] = useState({
                                    "data": {
                                        "car_name": "",
                                        "car_modal": "",
                                    }
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
        



       axios.post("http://localhost:1337/api/cars",payload, {
        
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
      
       
      
    </>
  );
}

//3. EXPORT AREA
export default Home
