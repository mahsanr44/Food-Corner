import React, { useState } from "react";
import MenuCard from "./Widgets/MenuCard";
import Menu from "./menuApi.js";
import Navbar from "./Widgets/Navbar";
import Footer from "./Widgets/Footer";

const Restaurant = () => {
  const [MenuData, setMenuData] = useState(Menu);

  const FilterMenu = (cat) => {
    if(cat==="all"){
      setMenuData(Menu)
      return
    }
    const updatedList = Menu.filter((item) => {
      return item.category === cat;
    });
    setMenuData(updatedList);
  };

  const uniqueMenuList = [
    ...new Set(
      Menu.map((item) => {
        return item.category;
      })
    ),"all"
  ];
console.log(uniqueMenuList)

  const IProps = {
    myFilterMenu: FilterMenu,
    myuniqueMenu: uniqueMenuList,
  };

  return (
    <>
      <Navbar myProps={IProps} />
      <MenuCard myMenuData={MenuData} />
      <Footer />
    </>
  );
};

export default Restaurant;
