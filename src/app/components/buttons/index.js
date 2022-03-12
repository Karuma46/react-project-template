import propTypes from "prop-types";

export const Button = (props) => {
  return (
    <button onClick={props.onClick} className={`${props.className}`}>
      {props.loading ? (
        <i className="bi-arrow-repeat spinner d-block" />
      ) : (
        <>
          {props.name}
          {props.icon && <i className={`bi-${props.icon}`} />}
        </>
      )}
    </button>
  );
};

Button.prototypes = {
  name: propTypes.string,
  onClick: propTypes.func,
};
