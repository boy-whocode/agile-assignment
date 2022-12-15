import React from "react";
import Card from "../commonComponents/Card";
import LeftNavBar from "../leftNavBar";

const LandingPage = ()=>{
    return(
        <>
        <div className="row mainLayout">
            <div className="col_1">
                <div className="leftContent">
                    <LeftNavBar />
                </div>
            </div>
            <div className="col">
                <div className="rightContent">
                <Card />
                </div>
            </div>
        </div>
        </>
    )
}

export default LandingPage;