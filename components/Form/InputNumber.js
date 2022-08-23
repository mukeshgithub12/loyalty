import React from "react";

const TypeNumber = (props) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="ls_from">
          {props.title} </label>
        <input type="number"name="from" id="ls_from" className="form-control form-control-sm"/>
      </div>
    </>
  );
};

export default TypeNumber;
