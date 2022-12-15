import React, { useEffect } from "react";
import NavTab from "./NavTab";
import menuData from "../../data/menuData.json"
import { useState } from "react";
import hamburgerIcon from "../../assets/images/icons/Hamburger_icon.svg.png"

const NavTabs = ()=>{
    const [showMenu, setShowMenu]= useState(false)
    const navTab__container = ["navTab__container",showMenu && "navTab__container--collapse"]
    return(
        <>
        <div className="hamburger">
            <button
            className="hamburger__button"
            onClick={()=>setShowMenu(!showMenu)}>
                <div className="hamburger__button--img">
                <img
                src={hamburgerIcon}
                />
                </div>

            </button>
        </div>
        <div
        className={navTab__container.join(" ")}
        >
        {
            menuData?.map((item,index,array)=>(
                <div key={index}>
                <NavTab 
                icon={item.icon}
                title={item.title}
                status={item.active}
                />
                </div>
                ))
            }
            </div>
        </>
    )
}

export default NavTabs