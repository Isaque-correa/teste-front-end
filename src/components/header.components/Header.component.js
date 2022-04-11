import { useState } from "react";

function HeaderComponent() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <section>
        <div className="header__coverList">
          <ul className="header__list">
            <li className="header__list__info">
              <img src="./img/icons/icons-shield.png" />
              comprar<p>100% seguro</p>
            </li>
            <li className="header__list__info">
              <img src="./img/icons/icons-truck.png" />
              <p>frete gratis</p> acima de R$200
            </li>
            <li className="header__list__info">
              <img src="./img/icons/icons-credit-card.png" />
              <p>parcele</p> suas compras
            </li>
            <li></li>
          </ul>
          <div className="header__list__logo">
            <img src="./img/ocaoselheir-logo.webp" />
          </div>
        </div>
      </section>
      <section className="header__perfil">
        <div className="header__perfil__logo">
          <img src="./img/ocaoselheir-logo.webp" />
        </div>
        <div className="header__perfil__search">
          <input placeholder="O que você esta buscando?"></input>
          <img src="./img/icons/icons-search.png" />
        </div>
        <div className="header__perfil__user">
          <ul>
            <li>
              <a href="#">
                <img className="box" src="img/icons/icons-box.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="user" src="img/icons/icons-heart.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="user" src="img/icons/icons-user.png" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="user" src="img/icons/icons-cart.png" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <nav className="header__navBar">
          <div className="header__navBar__menu" onClick={handleClick}>
            <div className="header__navBar__line1"></div>
            <div className="header__navBar__line2"></div>
            <div className="header__navBar__line3"></div>
          </div>
          <ul
            className={
              click ? "header__navBar__list active" : "header__navBar__list"
            }
          >
            <li onClick={closeMobileMenu}>
              <a href="#">brincar</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#">morder</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#">comer</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#">passear</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#">casa e conforto</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#">educação</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#">ofertas</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#">coleção de outono</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}
export default HeaderComponent;
