import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
// import DownloadBtn from "../components/Form/Button.js/DownloadBtn";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import Table from "../../components/Table"
const CustomerRpt = () => {
  const DownLoad =  <ReactHTMLTableToExcel
  id="test-table-xls-button"
  className="btn btn-sm btn-light border rounded-0 mr-3 "
  table="table-to-xls"
  filename="downLoad"
  sheet="customer-rpt"
  buttonText="Download as XLS"/>;
  return (
    <>
 
      <div className="pcoded-main-container">
        <Breadcrumb page_title="Report" title="Customer Detail Report"  btn={DownLoad} />
        <div className="card zen_card">
          <div className="card_body">
            <div className="row">
              <div className="col-md-12">
                <div className="tablescroll mt-1 tstyle">
                  <Table/>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerRpt;
