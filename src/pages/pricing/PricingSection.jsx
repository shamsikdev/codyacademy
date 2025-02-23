// styles
import "./PricingSection.css";
// images
import CheckingIcon from "../../assets/check-icon.svg";
import ArrowImg from "../../assets/arrow-img.png";
function PricingSection() {
  return (
    <section className="pricing-section">
      <div className="container pricing-section__container">
        <div className="pricing-content">
          <span className="pricing-content__intro intro">Kurs turlari</span>
          <h1 class="pricing-content__title">O’quv markazdagi kurs turlari</h1>
          <h4 className="pricing-content__subtitle">
            Sizga mos kurslar bilan tanishing!
          </h4>
        </div>
        <div className="pricing">
          <div className="arrow">
            <img src={ArrowImg} alt="down arrow icon" />
            <span className="arrow__text">Ommabop</span>
          </div>
          <ul className="pricing__list">
            <li className="pricing__item">
              <div className="pricing__headings">
                <h1 className="payment">Foundation</h1>
                <h3 className="pricing__title">3 oy</h3>
              </div>
              <ul className="checkings-list">
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">
                    C, Python dasturlash tillari
                  </p>
                </li>
              </ul>
              <div className="pricing__btns">
                <button className="btn violet-btn pricing__btn">
                  Kursga yozilish
                </button>
              </div>
            </li>
            <li className="pricing__item">
              <div className="pricing__headings">
                <h1 className="payment">Flutter</h1>
                <h3 className="pricing__title">8 oy</h3>
              </div>
              <ul className="checkings-list">
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">
                    Standart va Bootcamp kurslar
                  </p>
                </li>
              </ul>
              <div className="pricing__btns">
                <button className="btn violet-btn pricing__btn">
                  Kursga yozilish
                </button>
              </div>
            </li>
            <li className="pricing__item">
              <div className="pricing__headings">
                <h1 className="payment">.Net</h1>
                <h3 className="pricing__title">8 oy</h3>
              </div>
              <ul className="checkings-list">
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">
                    Standart va Bootcamp kurslar
                  </p>
                </li>
              </ul>
              <div className="pricing__btns">
                <button className="btn violet-btn pricing__btn">
                  Kursga yozilish
                </button>
              </div>
            </li>
            <li className="pricing__item">
              <div className="pricing__headings">
                <h1 className="payment">Ingliz tili</h1>
                <h3 className="pricing__title"></h3>
              </div>
              <ul className="checkings-list">
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">General English</p>
                </li>
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">IELTS</p>
                </li>
              </ul>
              <div className="pricing__btns">
                <button className="btn violet-btn pricing__btn">
                  Kursga yozilish
                </button>
              </div>
            </li>
            <li className="pricing__item">
              <div className="pricing__headings">
                <h1 className="payment">SAT</h1>
                <h3 className="pricing__title"></h3>
              </div>
              <ul className="checkings-list">
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">English</p>
                </li>
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">Math</p>
                </li>
              </ul>
              <div className="pricing__btns">
                <button className="btn violet-btn pricing__btn">
                  Kursga yozilish
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="overlay">
        Soon
        <span>pricing</span>
      </div> */}
    </section>
  );
}

export default PricingSection;
