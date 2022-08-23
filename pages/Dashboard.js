import React from "react";
import Matrix from "../components/Matrix";

const Dashboard = () => {
  var icon1 = <i className="fab fa-creative-commons-share"/> 
  var icon2 =  <i className="fas fa-sign-out-alt" />
    return (
    <>
      <div className="row">
        <Matrix icon={icon1 }  title="Total Generated Points"  count="10"/>
        <Matrix  icon={icon2 }  title="Total Redemption Points"  count="20"/>
      </div>
    </>
  );
};

export default Dashboard;
