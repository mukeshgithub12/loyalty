import React from "react";
import CommonBtn from "../../components/Form/Button.js/CommonBtn";
import Select from "react-select";
import TableFeedback from "../../components/Table/TableFeedback";

const Rtl_Add_Customer_Feedback = () => {
  const Sales = [
    { value: "1[DC]", label: "1[DC]" },
    { value: "2[DC]", label: "2[DC]" },
    { value: "3[DC]", label: "3[DC]" },
  ];

  return (
    <>
      <div className="pcoded-main-container">
        <div className="pcoded-content">
          <div className="dashboard_main pcoded-content zen_card bg-white">
            <div className="row">
              <div className="col-md-4 mt-4">
                <div className="Form_section">
                  <div className="form-group">
                    <label htmlFor="inputDate">Date</label>
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      placeholder="mm/dd/yyyy"
                    />
                  </div>
                  <div className="form-group">
                    <label>Customer</label>
                    <Select options={Sales} />
                  </div>
                  <div className="form-group">
                    <label>Customer Feedback</label>
                    <textarea
                      className="form-control form-control-sm"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label>Visit Remarks</label>
                    <textarea
                      className="form-control form-control-sm"
                      rows="3"
                    ></textarea>
                  </div>
                  <CommonBtn title="Reset" />
                  <CommonBtn title="Save" className="ml-4" />
                </div>
              </div>
              <div className="col-md-8">
                <TableFeedback />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rtl_Add_Customer_Feedback;
