import propTypes from "prop-types";
import { useEffect } from "react/cjs/react.development";

export const Button = (props) => {
  

  return (
    <button
      onClick={props.onClick}
      className={`${props.className}`}
      type={props.type}>
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
  name: propTypes.string.isRequired,
  onClick: propTypes.func,
  type: propTypes.string.isRequired,
};
