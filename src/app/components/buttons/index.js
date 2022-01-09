import propTypes from "prop-types";

export const MainButton = (props) => {
  return (
    <button onClick={props.onClick}>
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

MainButton.prototypes = {
  name: propTypes.string,
  onClick: propTypes.func,
};
