import { Button } from "app/components/buttons";
import React from "react";

const Buttons = () => {
  return (
    <div className="row">
      <div className="col card p-3">
        <h3>Buttons</h3>

        <div className="my-5 d-flex flex-row justify-content-between">
          <Button name="Main Button" className="primaryBtn" />
          <Button name="Secondary Button" className="secondaryBtn" />
          <Button name="Inactive Button" className="inactiveBtn" />
        </div>
      </div>

      <div className="col card py-3">
        <h3>Text Buttons & Links</h3>

        <div className="my-4">
          <a href="/" className="textBtn">This is a text link</a>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
