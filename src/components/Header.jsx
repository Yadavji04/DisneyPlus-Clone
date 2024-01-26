import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
function Header() {
    const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="px-7 py-4 flex justify-between">
    <div className="flex text-center gap-8">

      <img src={logo} className="w-[100px] object-cover md:w-[115px]" />
      <div className="hidden md:flex text-center gap-8">
      {menu.map((item) => (
        <HeaderItem name={item.name} Icon={item.icon} />
      ))}
      </div>
      <div className="md:hidden flex text-center gap-5">
      {menu.map((item,index) =>index<3&&(
        <HeaderItem name={''} Icon={item.icon} />
      ))}
      <div className="md:hidden py-4" onClick={()=>setToggle(!toggle)}>
        <HeaderItem name={''} Icon={HiDotsVertical}/>
       {toggle?  <div className="absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4">
        {menu.map((item,index) =>index>2&&(
        <HeaderItem name={item.name} Icon={item.icon} />
      ))} 
        </div>:null}
      </div>
      </div>

    </div>
    <img className="w-[50px] rounded-full" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"  />
    </div>
  );
}

export default Header;
