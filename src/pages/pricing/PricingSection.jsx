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
          <span className="pricing-content__intro intro">Pricing</span>
          <h1 class="pricing-content__title">Simple, transparent pricing</h1>
          <h4 className="pricing-content__subtitle">
            Get acquainted with the courses that are right for you!
          </h4>
        </div>
        <div className="pricing">
          <div className="arrow">
            <img src={ArrowImg} alt="down arrow icon" />
            <span className="arrow__text">Most popular!</span>
          </div>
          <ul className="pricing__list">
            <li className="pricing__item">
              <div className="pricing__headings">
                <h1 className="payment">$30/mth</h1>
                <h3 className="pricing__title">Flutter course</h3>
                <p className="pricing__text">Billed annually.</p>
              </div>
              <ul className="checkings-list">
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">
                    Access to all basic features
                  </p>
                </li>
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">lorem ipsum</p>
                </li>
              </ul>
              <div className="pricing__btns">
                <button className="btn violet-btn pricing__btn">
                  Get started
                </button>
                <button className="btn grey-btn pricing__btn">
                  Chat to sales
                </button>
              </div>
            </li>
            <li className="pricing__item">
              <div className="pricing__headings">
                <h1 className="payment">$30/mth</h1>
                <h3 className="pricing__title">Flutter course</h3>
                <p className="pricing__text">Billed annually.</p>
              </div>
              <ul className="checkings-list">
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">lorem ipsum</p>
                </li>
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">lorem ipsum</p>
                </li>
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">lorem ipsum</p>
                </li>

                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">lorem ipsum</p>
                </li>
              </ul>
              <div className="pricing__btns">
                <button className="btn violet-btn pricing__btn">
                  Get started
                </button>
                <button className="btn grey-btn pricing__btn">
                  Chat to sales
                </button>
              </div>
            </li>
            <li className="pricing__item">
              <div className="pricing__headings">
                <h1 className="payment">$30/mth</h1>
                <h3 className="pricing__title">Flutter course</h3>
                <p className="pricing__text">Billed annually.</p>
              </div>
              <ul className="checkings-list">
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">lorem ipsum</p>
                </li>
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">lorem ipsum</p>
                </li>
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">lorem ipsum</p>
                </li>
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">lorem ipsum</p>
                </li>
                <li className="checkings__item">
                  <img
                    src={CheckingIcon}
                    alt="check icon"
                    className="checkings__icon"
                  />
                  <p className="checkings__text">lorem ipsum</p>
                </li>
              </ul>
              <div className="pricing__btns">
                <button className="btn violet-btn pricing__btn">
                  Get started
                </button>
                <button className="btn grey-btn pricing__btn">
                  Chat to sales
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="overlay">
        Soon
        <span>pricing</span>
      </div>
    </section>
  );
}

export default PricingSection;
