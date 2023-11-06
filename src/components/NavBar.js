import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dogs">Dogs</NavLink>
      <NavLink to="/color-factory">Color Factory</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
    </nav>
  );
};

export default NavBar;
