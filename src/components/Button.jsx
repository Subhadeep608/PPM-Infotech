import { Link } from "react-router-dom";

const ButtonComponent = ({ name, path, className }) => {
  return (
    <Link to={path} className={`btn custom-btn ${className}`}>
      {name}
    </Link>
  );
};

export default ButtonComponent;
