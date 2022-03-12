import propTypes from "prop-types";

const Textinput = (props) => {
  return (
    <div className="inputDiv">
      {props.label && <label htmlFor={props.id}>{props.label}:</label>}
      <input type="text" {...props} />
    </div>
  );
};

Textinput.propTypes = {
  id: propTypes.string.isRequired,
  value: propTypes.any.isRequired,
  onChange: propTypes.func.isRequired,
  label: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
};

export default Textinput;
