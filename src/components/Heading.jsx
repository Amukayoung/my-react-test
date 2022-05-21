import React from "react";
import {add,substract,multiply,divide} from "../components/Calculator";



function Heading() {

    var gretting = "";

 function Bodygretting(){
    
    return <div>
                <p>Hello Sir/Madam,{gretting} I am Amuka Andrew young a junior full stack developer looking for an opportunity as a software engineer in your company. I am well versed in the following programming languages;</p>
                <ul>
                    <li>{add(2,0)}</li>
                    <li>{substract(5,3)}</li>
                    <li>{multiply(2,1)}</li>
                    <li>{divide(2,1)}</li>
                </ul>
            </div>
 }

   var time = new Date(2022,2,2,19).toLocaleTimeString('en-GB', { hour: "numeric"});

    var h1Style = {
        color:"#333333",
        fontSize:"50px",
    };

    

    if(time<12) {
        h1Style.color ="green";
        gretting="Good Morning"
    }else if(time<18) {
        h1Style.color ="blue";
        gretting = "Good Afternoon";
    }else{
        h1Style.color="red";
        gretting = "Good Evening";
        console.log(time);
    };


   return<div>
              <h1 style={h1Style}>{gretting}</h1>
              <h1 style={h1Style}>Full Stack Web Developer</h1>
              <Bodygretting/>
          </div>
  };

  export default Heading;
