import propTypes from "prop-types";

const Selectinput = (props) => {
  return (
    <div>
      {props.label && <label htmlFor={props.id}>{props.label}:</label>}
      <select onChange={props.onChange} id={props.id}>
        {props.options &&
          props.options.map((item) => (
            <option value={item.value} key={item.value}>
              {item.name}
            </option>
          ))}
      </select>
    </div>
  );
};

Selectinput.propTypes = {
  id: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  label: propTypes.string,
  options: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      value: propTypes.any.isRequired,
    })
  ),
};

export default Selectinput;
