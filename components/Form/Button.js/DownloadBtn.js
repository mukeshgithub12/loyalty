import React from "react";

const DownloadBtn = () => {
  return (
    <>
      <li>
        <span>
          <i className="fa fa-download" /> 
          <a
            data-action="download" title="Download"className="download" id="download"> Download</a>
        </span>
      </li>
    </>
  );
};

export default DownloadBtn;
