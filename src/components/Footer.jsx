import React from "react";
const currentyear= new Date().getFullYear();
function Footer(){
return (
 <footer>
  <p>copyright © {currentyear}</p>   
 </footer>

);


}
export default Footer;