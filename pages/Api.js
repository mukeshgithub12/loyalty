import React from "react";
import Breadcrumb from "../components/Breadcrumb";
// import Menu from "../components/Menu";
const Api = () => {
  const icon = <i className="fas fa-link" />;
  return (
    <>
      <div className="pcoded-main-container">
        <Breadcrumb page_title="Api"/>
        <div className="pcoded-content">
          <div className="dashboard_main pcoded-content zen_card bg-white">
            <div className="Scriptcontentt">
              <div className="box-item d-flex flex-wrap text-center">
                <div className="department-box">
                  <div className="icon-para my-2 mx3">
                    <a target="_blank" href="#!">
                      <div className="icon-color">
                        <i className="fas fa-link"></i>
                      </div>
                      <p>API</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Api;
