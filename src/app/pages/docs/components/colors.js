import React from "react";

const Colors = () => {
  return (
    <div className="row my-4">
      <div className="col card p-3 gx-2">
        <h3>Main Colors</h3>
        <div className="d-flex flex-row">
          <div className="mx-3">
            <div className="colorBox my-2 primaryBg"></div>
            <p>Primary Color</p>
          </div>

          <div className="mx-3">
            <div className="colorBox my-2 accent1Bg"></div>
            <p>Accent #1</p>
          </div>

          <div className="mx-3">
            <div className="colorBox my-2 accent2Bg"></div>
            <p>Accent #2</p>
          </div>
        </div>
      </div>
      <div className="col card p-3 gx-2">
        <h3>Secondary Colors</h3>
        <div className="d-flex flex-row">
          <div className="mx-3">
            <div className="colorBox my-2 darkBg"></div>
            <p>Dark color</p>
          </div>

          <div className="mx-3">
            <div className="colorBox my-2 lightBg"></div>
            <p>Light Color</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Colors;