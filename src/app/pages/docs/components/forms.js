import Checkbox from "app/components/inputs/Checkbox";
import Radioinput from "app/components/inputs/Radioinput";
import Selectinput from "app/components/inputs/Selectinput";
import Textinput from "app/components/inputs/Textinput";
import React from "react";

const Forms = () => {
  return (
    <div className="row">
      <div className="col card py-3">
        <h3>Forms</h3>

        <div className="my-3">
          <Textinput label="TextInput" placeholder="Enter Text Here" />
        </div>

        <div className="my-3">
          <Selectinput
            label="SelectInput"
            options={[
              { name: "Option 1" },
              { name: "Option 2" },
              { name: "Options 3" },
            ]}
          />
        </div>

        <div className="my-3">
          <Checkbox name="CheckBox" />
        </div>

        <div className="my-3">
          <Radioinput
            name="Radio"
            options={[
              { name: "option 1", value: "value 1" },
              { name: "option 2", value: "value 2" },
              { name: "option 3", value: "value 3" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Forms;
