import propTypes from "prop-types";

const Radioinput = (props) => {
  return (
    <div className="inputDiv radio">
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
            <span>
              {
                props.value === item.value ? 
                ( <i className="bi-check-circle" />) :
                (<i className="bi-circle" />)
              }
            </span> &nbsp;
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

export default Radioinput;
