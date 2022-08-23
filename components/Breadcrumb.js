import React from "react";
import Link from "next/link";
const Breadcrumb = (props) => {
  return (
    <>
      <div className="Breadcrumb_Bg bg-light">
        <div className="row py-2">
          <div className="col-sm-6">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-light mb-0 py-0">
                <li className="breadcrumb-item">
                  <Link href="/">
                    <i className="feather icon-home" />
                  </Link>
                </li>
              <li className="breadcrumb-item">
                  <Link href="/">{props.page_title}</Link>
                </li>
                <li className="breadcrumb-item">
                  <span>{props.title}</span>
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-sm-6">
            <ul
              className="float-right text-center nav nav-pills"
              id="Nav-Style"
            >
              {props.btn}
              
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Breadcrumb;
