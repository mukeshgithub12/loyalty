import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Menu from "../../components/Menu";

const Master = () => {
  const slabs = <i className="fas fa-box" />
  const budge =   <i className="fas fa-train" />
  const store =   <i className="fas fa-store" />
  return (
    <>
      <div className="pcoded-main-container">
      <Breadcrumb page_title="Master"/>
        <div className="pcoded-content">
          <div className="dashboard_main pcoded-content zen_card bg-white">
            <div className="Scriptcontentt">
              <div className="box-item d-flex flex-wrap text-center">
                <Menu link='/slabs' icon={slabs} title="Slabs"/>
                <Menu  link='/master/rtl_add_travel_budgeting' icon={budge} title="Travel Budgeting"  />
                <Menu  link='/master/store_minimum_stock' icon={store} title="Store Minimum Stock"  />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Master;
