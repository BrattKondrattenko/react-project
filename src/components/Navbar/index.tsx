import { Link } from "react-router-dom";
import "./styles.css";
import {
  USER_ROUTE,
  CART_ROUTE,
  MAIN_ROUTE,
  TABLE_ROUTE,
} from "../MainRouter/configs.tsx";

type NavbarPropsType = {
  isAuth: boolean;
  authorize: (val: boolean) => void;
};

const Navbar = (props: NavbarPropsType) => {
  const { isAuth, authorize } = props;
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link className="navbar__link" to={MAIN_ROUTE}>
          Главная
        </Link>
        <Link className="navbar__link" to={TABLE_ROUTE}>
          Каталог товаров
        </Link>
        <Link className="navbar__link" to={CART_ROUTE}>
          Корзина
        </Link>
        <Link className="navbar__link" to={USER_ROUTE}>
          Профиль пользователя
        </Link>
      </div>
      <Link
        className="sign-up-button"
        to={MAIN_ROUTE}
        onClick={() => authorize(!isAuth)}
      >
        {isAuth ? "Выйти" : "Войти"}
      </Link>
    </div>
  );
};

export default Navbar;
