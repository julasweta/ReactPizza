import classNames from "classnames";

const Button = ({className, outLine, onClick, children}) => {
  return (
    <button
      className={classNames("button", className, {
        "button--outline": outLine,
      })} onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
