import { MainButton } from "app/components/buttons";
import React from "react";

const Buttons = () => {
  return (
    <div className="row">
      <div className="col card p-3">
        <h3>Buttons</h3>

        <div className="my-5 d-flex flex-row justify-content-between">
          <MainButton name="Main Button" />
          <MainButton name="Main Button Clicked" />
          <MainButton name="Main Button Inactive" />
        </div>

        <div className="my-5 d-flex flex-row justify-content-between">
          <button>Secondary Button</button>
          <button>Secondary Button Clicked</button>
          <button>Secondary Button Inactive</button>
        </div>

        <div className="my-5 d-flex flex-row justify-content-between">
          <button>Tertiary Button</button>
          <button>Tertiary Button Clicked</button>
          <button>Tertiary Button Inactive</button>
        </div>
      </div>

      <div className="col card py-3">
        <h3>Text Buttons & Links</h3>

        <div className="my-4">
          <a href="/">This is a text link</a>
        </div>
        <div className="my-4">
          <a href="/">This is a hovered text link</a>
        </div>
        <div className="my-4">
          <a href="/">This is a visited text link</a>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
