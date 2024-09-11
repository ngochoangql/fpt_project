import React, { useState } from "react";
import "./Select.scss";
function Select() {
  const [open, setOpen] = useState(false);
  return (
    <div className="select__container">
      <div className="select" onClick={() => setOpen(!open)}>
        My File
      </div>
      <div
        className={`select-options ${
          open ? " select-options--show" : " select-options--unshow"
        }`}
      >
        {" "}
        <div className="select-option__new">New Folder</div>
        <div className="select-option__upload">Upload File</div>
        <div className="select-option__upload">Upload Folder</div>
      </div>
    </div>
  );
}

export default Select;
