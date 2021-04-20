import { Link, NavLink } from "react-router-dom";

export default function Header({ loggedIn, setLoggedIn }) {
  const signOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("email");
    setLoggedIn(false);
  };

  return (
    <header className="header">
      <nav>
        <ul className="header__lists">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="header__link-active"
              className="header__link"
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              activeClassName="header__link-active"
              className="header__link"
            >
              Новости
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              activeClassName="header__link-active"
              className="header__link"
            >
              Профиль
            </NavLink>
          </li>
          {!loggedIn ? (
            <NavLink
              to="/sign-in"
              activeClassName="header__link-active"
              className="header__link"
            >
              Войти
            </NavLink>
          ) : (
            <Link to="/sign-in" className="header__link" onClick={signOut}>
              Выйти
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
}
