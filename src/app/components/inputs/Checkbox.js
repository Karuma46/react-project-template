import propTypes from "prop-types";

const Checkbox = (props) => {
  return (
    <div>
      <input type="checkbox" {...props} />
      <span>{props.name}</span>
    </div>
  );
};

Checkbox.propTypes = {
  id: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};

export default Checkbox;
