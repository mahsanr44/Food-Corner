import React, { useState } from "react";
import MenuCard from "./MenuCard";
import Menu from "./menuApi.js";

const Restaurant = () => {
  
  const [MenuData, setMenuData] = useState(Menu);
  
  return (
    <>
      <MenuCard  myMenuData={MenuData}/>
    </>
  );
}; 

export default Restaurant;
