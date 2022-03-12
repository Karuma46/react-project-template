import propTypes from "prop-types";

const Checkbox = (props) => {
  return (
    <div className="inputDiv checkbox">
      <input type="checkbox" {...props} id={props.id} checked />
      <span className="checkboxIcon">
        {
          props.checked ? (
            <i className="bi-check-square" />
          ) : (
            <i className="bi-square" />
          )
        }
      </span> &nbsp;
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
