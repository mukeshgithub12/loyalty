import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Menu from "../components/Menu";
const reports = () => {
  const Report =   <i className="fas fa-link" />
 
  return (
    <>
      <div className="pcoded-main-container">
        <Breadcrumb page_title="Reports"/>
        <div className="pcoded-content">
          <div className="dashboard_main pcoded-content zen_card bg-white">
            <div className="Scriptcontentt">
              <div className="box-item d-flex flex-wrap text-center">
              <Menu  link='/report/customer-rpt' icon={Report} title="Customer Detail Report"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default reports;
