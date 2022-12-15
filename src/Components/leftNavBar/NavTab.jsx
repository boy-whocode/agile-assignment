import React from "react";

const NavTab = ({
    icon,
    title,
    status
})=>{
    const navTab = ["navTab",status && "navTab--active"]
    return(
        <>
        <div className={navTab.join(" ")}>
            <div className="navTab__icon">
                <div>
                    <img 
                    src={icon}
                    />
                </div>
            </div>
            <div className="navTab__text">
                <p>{title}</p>
            </div>
        </div>
        </>
    )
}

export default NavTab