import React from "react";
const Travel = <i className="fas fa-list" />
const users = <i className="fas fa-users" />
import Menu from "../components/Menu";
import Breadcrumb from "../components/Breadcrumb";


const Transaction = () => {
  return (
    <>
      <div className="pcoded-main-container" >
        <Breadcrumb page_title="Transaction"/>
        <div className="pcoded-content">
          <div className="dashboard_main pcoded-content zen_card bg-white">
          <div className="Scriptcontentt">
          <div className="box-item d-flex flex-wrap text-center">
          <Menu link='/transaction/rtl_travel_planning' icon={Travel} title="Rtl Travel Planning"/>
          <Menu link='/transaction/rtl_add_customer_feedback' icon={users} title="Rtl Add Customer Feedback"/>
          </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Transaction;
