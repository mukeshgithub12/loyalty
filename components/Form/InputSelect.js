import React from "react";

const InputSelect = () => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="Choose_lebel">Choose Level</label>
        <select className="form-control form-control-sm" id="Choose_lebel">
          <option>Choose One</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </>
  );
};

export default InputSelect;
