import { Link, NavLink } from "react-router-dom";
import "./design.css";
function Header() {
  return (
    <>
      <div>
        <ul>
          <NavLink to="/cab">
            <li>CAB</li>
          </NavLink>
          <Link to="/hotels">
            <li>HOTEL</li>
          </Link>
          <a href="/trains">
            <li>TRAINS</li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Header;
