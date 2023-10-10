import { Link } from "react-router-dom";

const Navbar =()=>{
  return (
      <div>
        <Link to="/">Main</Link>
        <Link to="/notMain">notMain</Link>
      </div>
  )
}

export default Navbar;
