import React from "react";

const TypeText = (props) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="ls_level">{props.title}</label>
        <input type="text"id="ls_level"className="form-control form-control-sm"/>
      </div>
    </>
  );
};

export default TypeText;
