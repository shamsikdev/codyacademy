// styles
import "./Footer.css";
// images
import AppStoreICon from "../../assets/app-store-icon.svg";
import GooglePlayICon from "../../assets/google-play-icon.svg";
import InstagramIcon from "../../assets/instagram-icon.svg";
import TelegramIcon from "../../assets/telegram-gr-icon.svg";
import LinkedinIcon from "../../assets/linkedin-gr-icon.svg";
import FacebookIcon from "../../assets/facebook-icon.svg";
import GithubIcon from "../../assets/github-gr-icon.svg";
function Footer() {
  const handleScrollTeachers = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 380,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="wrapper">
          <div className="wrapper-left">
            <a href="./" className="footer__site-logo site-logo">
              <svg
                width="43"
                height="28"
                viewBox="0 0 43 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.03575 1C5.06985 1 1.15881 3.42141 1.0565 7.92517C0.954177 12.4289 1.01386 14.5998 1.0565 15.1222C1.30147 17.4566 4.01471 21.0801 9.06614 21.0878H24.9415C25.3679 21.1038 26.4092 21.606 27.1638 23.4868C27.9312 24.8303 29.0368 27.042 31.944 26.9992H36.0527C37.6287 27.042 41.6985 25.4585 42 21.0878V12.6272C42 10.896 40.1912 6.88815 35.7809 6.70967H17.9071C17.63 6.73099 16.9958 6.6169 16.6761 5.98996C16.3564 5.36302 15.4344 3.69223 15.0134 2.93521C14.7523 2.29014 13.8368 1 12.2636 1H7.03575ZM8.31474 6.70967H16.3723C17.1287 6.70967 17.646 7.61596 17.9071 8.06911C18.0723 8.341 18.6074 9.22384 19.4259 10.5801C20.2445 11.9363 21.5043 12.4407 22.1757 12.4353H34.2462C35.5184 12.4744 35.9355 13.5176 36.0527 13.9067V18.7208C36.0527 20.512 35.1361 21.0451 34.6778 21.0878H27.3876C25.3572 21.0878 24.6857 18.7368 23.8064 17.3133C23.2181 15.9187 21.6002 15.4741 20.8648 15.4261H8.66646C7.18283 15.5285 6.90785 14.5198 6.95581 14.0027V8.77282C6.81513 7.00715 7.80314 6.66169 8.31474 6.70967Z"
                  fill="#000"
                />
                <path
                  d="M7.03575 1C5.06985 1 1.15881 3.42141 1.0565 7.92517C0.954177 12.4289 1.01386 14.5998 1.0565 15.1222C1.30147 17.4566 4.01471 21.0801 9.06614 21.0878M7.03575 1C8.12289 1 10.6904 1 12.2636 1M7.03575 1H12.2636M9.06614 21.0878C14.003 21.0878 21.7068 21.0878 24.9415 21.0878M9.06614 21.0878H24.9415M24.9415 21.0878C25.3679 21.1038 26.4092 21.606 27.1638 23.4868C27.9312 24.8303 29.0368 27.042 31.944 26.9992M31.944 26.9992C34.0543 26.9992 35.5624 26.9992 36.0527 26.9992M31.944 26.9992H36.0527M36.0527 26.9992C37.6287 27.042 41.6985 25.4585 42 21.0878M42 21.0878C42 17.3645 42 13.8961 42 12.6272M42 21.0878V12.6272M42 12.6272C42 10.896 40.1912 6.88815 35.7809 6.70967M35.7809 6.70967C31.4068 6.70967 22.0425 6.70967 17.9071 6.70967M35.7809 6.70967H17.9071M17.9071 6.70967C17.63 6.73099 16.9958 6.6169 16.6761 5.98996C16.3564 5.36302 15.4344 3.69223 15.0134 2.93521C14.7523 2.29014 13.8368 1 12.2636 1M6.95581 8.77282C6.81513 7.00715 7.80314 6.66169 8.31474 6.70967H16.3723C17.1287 6.70967 17.646 7.61596 17.9071 8.06911C18.0723 8.341 18.6074 9.22384 19.4259 10.5801C20.2445 11.9363 21.5043 12.4407 22.1757 12.4353M6.95581 8.77282C6.95581 10.2698 6.95581 12.8831 6.95581 14.0027M6.95581 8.77282V14.0027M6.95581 14.0027C6.90785 14.5198 7.18283 15.5285 8.66646 15.4261M8.66646 15.4261C10.1501 15.4261 17.4168 15.4261 20.8648 15.4261M8.66646 15.4261H20.8648M20.8648 15.4261C21.6002 15.4741 23.2181 15.9187 23.8064 17.3133C24.6857 18.7368 25.3572 21.0878 27.3876 21.0878M27.3876 21.0878C29.0119 21.0878 32.9245 21.0878 34.6778 21.0878M27.3876 21.0878H34.6778M34.6778 21.0878C35.1361 21.0451 36.0527 20.512 36.0527 18.7208M36.0527 18.7208C36.0527 16.9295 36.1213 14.739 36.0527 13.9067M36.0527 18.7208V13.9067M36.0527 13.9067C35.9355 13.5176 35.5184 12.4744 34.2462 12.4353M34.2462 12.4353C33.0823 12.4353 25.7143 12.4353 22.1757 12.4353M34.2462 12.4353H22.1757"
                  stroke="#5D41AC"
                />
              </svg>
              <h3 className="footer__logo-text logo-text">Cody</h3>
            </a>
            <p className="wrapper-left__text">
              Dunyoda yanada baxtliroq bo'ladigan ajoyib raqamli ko'nikmalarni
              o'rganing.
            </p>
            {/* <nav>
              <ul className="wrapper-left__list">
                <li className="wrapper-left__item">
                  <a href="" className="wrapper-left__link">
                    Overview
                  </a>
                </li>
                <li
                  onClick={handleScrollTeachers}
                  className="wrapper-left__item"
                >
                  <a href="" className="wrapper-left__link">
                    Teachers
                  </a>
                </li>
                <li className="wrapper-left__item">
                  <a href="" className="wrapper-left__link">
                    Pricing
                  </a>
                </li>
                <li className="wrapper-left__item">
                  <a href="" className="wrapper-left__link">
                    Help
                  </a>
                </li>
                <li className="wrapper-left__item">
                  <a href="" className="wrapper-left__link">
                    Privacy
                  </a>
                </li>
              </ul>
            </nav> */}
          </div>
          <div className="wrapper-right">
            <a href="/" target="blank" className="wrapper-right__text">
              Ilovani yuklab olish
            </a>
            <div>
              <a target="blank" href="https://www.apple.com/app-store/">
                <img src={AppStoreICon} alt="App store icon" />
              </a>
              <a target="blank" href="https://play.google.com/">
                <img src={GooglePlayICon} alt="Google play market icon" />
              </a>
            </div>
          </div>
        </div>
        <hr className="footer__line" />
        <div className="footer__contacts">
          <p className="copyright-text">© 2024 Cody. All rights reserved.</p>
          <ul className="contact-list">
            <li className="contact-item">
              <a href="https://www.instagram.com/cody_academy/" target="blank">
                <img src={InstagramIcon} alt="instagram icon" />
              </a>
            </li>
            <li className="contact-item">
              <a href="https://t.me/cody_academy" target="blank">
                <img src={TelegramIcon} alt="telegram icon" />
              </a>
            </li>
            {/* <li className="contact-item">
              <a href="http://" target="blank">
                <img src={LinkedinIcon} alt="linkedin icon" />
              </a>
            </li>
            <li className="contact-item">
              <a href="http://" target="blank">
                <img src={FacebookIcon} alt="facebook icon" />
              </a>
            </li>
            <li className="contact-item">
              <a href="http://" target="blank">
                <img src={GithubIcon} alt="github icon" />
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
