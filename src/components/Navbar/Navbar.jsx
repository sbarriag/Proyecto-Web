import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/instructions">Instrucciones</Link></li>
        <li><Link to="/about">Nosotros</Link></li>
        <li><Link to="/game">Ir a Partida</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Registro</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;