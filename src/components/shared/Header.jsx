import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header navbar navbar-expand-lg bg-body-tertiary p-2">
      <div className="header__container container-fluid">
        <div className="header__collapse collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="header__list navbar-nav me-auto mb-2 mb-lg-0">
            <li className="header__item nav-item">
              <Link to="/" className="header__link nav-link active"> Home </Link>
            </li>
            <li className="header__item nav-item">
              <Link to="/about" className="header__link nav-link active"> Acerca de nosotros </Link>
            </li>
            <li className="header__item nav-item">
              <Link to="/history" className="header__link nav-link active"> Registro de clientes satisfechos </Link>
            </li>
            <li className="header__item nav-item">
              <Link to="/admin" className="header__link nav-link active"> Admin </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
