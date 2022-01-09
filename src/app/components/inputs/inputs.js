import propTypes from "prop-types";

export const Textinput = (props) => {
  return (
    <div>
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

export const Selectinput = (props) => {
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

export const Radioinput = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      {props.options &&
        props.options.map((item) => (
          <div>
            <input
              type="radio"
              value={item.value}
              name={props.name}
              onChange={props.onChange}
              key={props.value}
            />
            <span>{item.name}</span>
          </div>
        ))}
    </div>
  );
};

Radioinput.propTypes = {
  id: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  options: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      value: propTypes.any.isRequired,
    })
  ),
};

export const Checkbox = (props) => {
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
