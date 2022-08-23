import React from "react";
import HeadLinkscript from "../HeadLinkScript";
import CommonBtn from "./Button.js/CommonBtn";

const FormLabel = () => {
  return (
    <>
    <HeadLinkscript/>
      <form>
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
        <div className="form-group">
          <label htmlFor="ls_level">Level</label>
          <input
            type="text"
            id="ls_level"
            className="form-control form-control-sm"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ls_from">Slab from </label>
          <input
            type="number"
            name="from"
            id="ls_from"
            className="form-control form-control-sm"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ls_from">Slab to </label>
          <input
            type="number"
            name="from"
            id="ls_from"
            className="form-control form-control-sm"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ls_from">Points (%) </label>
          <input
            type="number"
            name="from"
            id="ls_from"
            className="form-control form-control-sm"
          />
        </div>
        <CommonBtn/>
      </form>
    </>
  );
};

export default FormLabel;
