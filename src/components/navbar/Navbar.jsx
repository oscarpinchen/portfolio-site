import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={PATHS.home}>Home</Link>
        </li>
        <li>
          <Link to={PATHS.about}>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
