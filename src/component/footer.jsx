//jshint esversion:6
import React from "react";
import ReactDOM from "react-dom";

let time = new Date();
let year = time.getFullYear();

function Footer (){
 return <footer>
     <p>Copyright {year} </p>
 </footer>   
}
export default Footer;