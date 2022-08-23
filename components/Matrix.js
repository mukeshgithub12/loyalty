import React from "react";

const CardCom = (props) => {
  return (
    <>
      <div className="col-xl-3 col-md-6">
        <div className="card">
          <div className="card-body  card_border">
            <div className="row align-items-center m-l-0">
              <div className="icondiv">
                 {props.icon}
              </div>
              <div className="col-auto">
                <h6 className="text-muted color-lite-black m-b-10">
                  {props.title}
                </h6>
                <h2 className="m-b-0">{props.count}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6" hidden>
        <div className="card">
          <div className="card-body card_border">
            <div className="row align-items-center m-l-0">
              <div className="icondiv">
                <i className="fas fa-sign-out-alt" />
              </div>
              <div className="col-auto">
                <h6 className="text-muted color-lite-black m-b-10">
                  Total Redemption Points
                </h6>
                <h2 className="m-b-0">0</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCom;
