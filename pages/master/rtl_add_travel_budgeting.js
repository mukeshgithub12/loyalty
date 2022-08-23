import React from "react";
// import Head from "next/head";
// import Script from "next/script";
import CommonBtn from "../../components/Form/Button.js/CommonBtn";
import Select from "react-select";
import TableTravel from "../../components/Table/TableTravel";
import Breadcrumb from "../../components/Breadcrumb";

const Rtl_Add_travel_Budgeting = () => {
  const Sales = [
    { value: "1[DC]", label: "1[DC]" },
    { value: "2[DC]", label: "2[DC]" },
    { value: "3[DC]", label: "3[DC]" },
  ];
  const City = [
    { value: "Ludhiana", label: "Ludhiana" },
    { value: "Akola", label: "Akola" },
    { value: "Ajmer", label: "Ajmer" },
  ];
  return (
    <>
      {/* <Head>
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/zen_ui.css" />
        <link rel="stylesheet" href="assets/css/structureV3.css" />
        <Script src="assets/js/vendor-all.min.js" />
        <Script src="assets/js/plugins/bootstrap.min.js" />
        <Script src="assets/js/pcoded.min.js" />
      </Head> */}
      <div className="pcoded-main-container">
        <Breadcrumb page_title="Master" title="Customer Detail Report" />
        <div className="pcoded-content">
          <div className="dashboard_main pcoded-content zen_card bg-white">
            <div className="row">
              <div className="col-md-4 mt-4">
                <div className="Form_section">
                  <div className="form-group">
                    <label>Distribution Channel</label>
                    <Select options={Sales} />
                  </div>
                  <div className="form-group">
                    <label>Reporting Head Sales Representative</label>
                    <Select options={City} />
                  </div>
                  <div className="form-group">
                    <label>Sales Representative</label>
                    <Select options={City} />
                  </div>
                  <div className="form-group">
                    <label>Imprest A/C (GL Account)</label>
                    <Select options={City} />
                  </div>
                  <div className="form-group d-flex">
                    <input
                      type="number"
                      className="form-control form-control-sm w-50"
                      placeholder="Ex.900"
                    />
                    <CommonBtn title="Month Wise Detail" />
                  </div>
                  <CommonBtn title="Reset" />
                  <CommonBtn title="Save" className="ml-4" />
                </div>
              </div>
              <div className="col-md-8">
                <TableTravel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rtl_Add_travel_Budgeting;
