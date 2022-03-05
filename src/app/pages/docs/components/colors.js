import React from "react";

const Colors = () => {
  return (
    <div className="row my-4">
      <div className="col card p-3 gx-2">
        <h3>Main Colors</h3>
        <div className="d-flex flex-row">
          <div className="mx-3">
            <div className="colorBox my-2 blackBg"></div>
            <p>Main Color #1</p>
          </div>

          <div className="mx-3">
            <div className="colorBox my-2 lightBg"></div>
            <p>Main Color #2</p>
          </div>

          <div className="mx-3">
            <div className="colorBox my-2 greyBg"></div>
            <p>Main Color #3</p>
          </div>
        </div>
      </div>
      <div className="col card p-3 gx-2">
        <h3>Secondary Colors</h3>
      </div>
    </div>
  );
};


export default Colors;