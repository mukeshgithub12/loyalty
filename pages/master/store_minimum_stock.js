import React from "react";
import CommonBtn from "../../components/Form/Button.js/CommonBtn";
import Select from "react-select";
import StoreMinimumStock from "../../components/Table/StoreMinimumStock";

const Store_Minimum_Stock = () => {
  const Store = [
    { value: "110", label: "110" },
    { value: "210", label: "210" },
    { value: "302", label: "302" },
  ];
  const sub_category = [
    { value: "110", label: "110" },
    { value: "210", label: "210" },
    { value: "302", label: "302" },
  ];

  return (
    <>
      <div className="pcoded-main-container">
        <div className="pcoded-content">
          <div className="dashboard_main pcoded-content zen_card bg-white">
           <div className="Form_section">
            <div className="row">
              <div className="col-md-6 mt-4">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Store Id</label>
                        <Select options={Store} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Sub Category</label>
                        <Select options={sub_category} />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Visit Remarks</label>
                    <input className="form-control form-control-sm" type="number"/>
                  </div>
                  <CommonBtn title="Save" className="ml-4" />
                </div>
              <div className="col-md-6">
                <StoreMinimumStock />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store_Minimum_Stock;
