// images
import siteIcon from "../../assets/cody_icon.svg";
// styles
import "./Header.css";
// icons
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [isOpened, setIsOpened] = useState(false);
  function handleClick() {
    setIsOpened((open) => !open);
  }
  // function clickScroll() {
  //   window.scrollTo(0, 0);
  // }
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__wrapper-left">
          <a href="./" className="site-logo">
            <img src={siteIcon} alt="icon of Cody" />
            <h3 className="header__logo-text logo-text">Cody</h3>
          </a>
          <nav className="sitenav">
            <ul className="sitenav__list">
              <li className="sitenav__item">
                <a href="" className="sitenav__link">
                  Home
                </a>
              </li>
              <li className="sitenav__item">
                <a href="/" className="sitenav__link">
                  Teachers
                </a>
              </li>
              <li className="sitenav__item">
                <a href="" className="sitenav__link">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <button className="btn header__btn">Get the app</button>
        <button className="hamburger-btn" onClick={handleClick}>
          {!isOpened && <RxHamburgerMenu className="hamburger" />}
          {isOpened && <RxCross1 className="cross" />}
        </button>
      </div>
    </header>
  );
}

export default Header;
