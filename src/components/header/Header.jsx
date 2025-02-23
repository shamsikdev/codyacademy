// images
import siteIcon from "../../assets/cody_icon.svg";
// styles
import "./Header.css";
// icons
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useEffect } from "react";
function Header() {
  const [isOpened, setIsOpened] = useState(false);
  function handleClick() {
    setIsOpened((open) => !open);
  }
  const handleScrollHome = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScrollTeachers = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 380,
      behavior: "smooth",
    });
  };
  const handleScrollPricing = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 1550,
      behavior: "smooth",
    });
  };
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
              <li onClick={handleScrollHome} className="sitenav__item">
                <a href="/" className="sitenav__link">
                  Bosh sahifa
                </a>
              </li>
              <li onClick={handleScrollTeachers} className="sitenav__item">
                <a href="/" className="sitenav__link">
                  Ustozlar
                </a>
              </li>
              <li onClick={handleScrollPricing} className="sitenav__item">
                <a href="" className="sitenav__link">
                  Kurs turlari
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <button className="btn header__btn">
          Ilovani yuklab olish <div className="btn__overlay">Soon</div>
        </button>
        <button className="hamburger-btn" onClick={handleClick}>
          {!isOpened && <RxHamburgerMenu className="hamburger" />}
          {isOpened && <RxCross1 className="cross" />}
        </button>
      </div>
    </header>
  );
}

export default Header;
