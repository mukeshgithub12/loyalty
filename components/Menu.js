import React from "react";
import Link from "next/link";
const MasterCom = (props) => {
  return (
    <>
      <div className="department-box">
        <div className="icon-para my-2 mx3">
          <Link href={props.link}> 
          <a>
            <div className="icon-color">
               {props.icon}
            </div>
            <p>{props.title}</p>
          </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MasterCom;
