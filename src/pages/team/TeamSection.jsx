// styles
import "./TeamSection.css";
// images
import TelegramIcon from "../../assets/telegram-icon.svg";
import LinkedinIcon from "../../assets/linkedin-icon.svg";
import GithubIcon from "../../assets/github-icon.svg";
function TeamSection() {
  return (
    <section className="team-section">
      <div className="container team-section__container">
        <div className="left-side">
          <span className="left-side__intro intro">Our team</span>
          <h1 className="left-side__title">Teachers team</h1>
          <p className="left-side__text">
            We’re a cross-disciplinary team that loves to create great
            experiences for our students.
          </p>
          {/* <div className="left-side__btns">
            <button className="btn grey-btn left-side__btn">About us</button>
            <button className="btn violet-btn left-side__btn">
              Open course
            </button>
          </div> */}
        </div>
        <div className="right-side">
          <ul className="member-list">
            <li className="member-list__item">
              <div className="member-list__info">
                <div>
                  <h2 className="member-list__name">Abdurauf Halimboyev</h2>
                  <p className="member-list__occupation">
                    {/* <span>Founder & CEO</span> */}
                    <span className="job">Flutter | Foundation instructor</span>
                  </p>
                </div>
                {/* <div className="member-list__links">
                  <a href="" className="member-list__link">
                    <img src={LinkedinIcon} alt="linkedin icon" />
                  </a>
                  <a href="" className="member-list__link">
                    <img src={GithubIcon} alt="github icon" />
                  </a>
                  <a
                    href="https://t.me/AbduraufUZ"
                    target="blank"
                    className="member-list__link"
                  >
                    <img src={TelegramIcon} alt="telegram icon" />
                  </a>
                </div> */}
              </div>
            </li>
            <li className="member-list__item">
              <div className="member-list__info">
                <div>
                  <h2 className="member-list__name">Ali Raxmonberdiyev</h2>
                  <p className="member-list__occupation">
                    {/* <span>Instructor</span> */}
                    <span className="job">.NET instructor</span>
                  </p>
                </div>
                {/* <div className="member-list__links">
                  <a href="" className="member-list__link">
                    <img src={LinkedinIcon} alt="linkedin icon" />
                  </a>
                  <a href="" target="blank" className="member-list__link">
                    <img src={GithubIcon} alt="github icon" />
                  </a>
                  <a target="blank" href="" className="member-list__link">
                    <img src={TelegramIcon} alt="telegram icon" />
                  </a>
                </div> */}
              </div>
            </li>
            <li className="member-list__item">
              <div className="member-list__info">
                <div>
                  <h2 className="member-list__name">Foziljon Mamadaliyev</h2>
                  <p className="member-list__occupation">
                    {/* <span>Instructor</span> */}
                    <span className="job">IELTS instructor</span>
                  </p>
                </div>
                {/* <div className="member-list__links">
                  <a href="" className="member-list__link">
                    <img src={LinkedinIcon} alt="linkedin icon" />
                  </a>
                  <a href="" className="member-list__link">
                    <img src={GithubIcon} alt="github icon" />
                  </a>
                  <a href="" className="member-list__link">
                    <img src={TelegramIcon} alt="telegram icon" />
                  </a>
                </div> */}
              </div>
            </li>
            <li className="member-list__item">
              <div className="member-list__info">
                <div>
                  <h2 className="member-list__name">Sardor Ergashaliyev</h2>
                  <p className="member-list__occupation">
                    {/* <span>Instructor</span> */}
                    <span className="job">Foundation instructor</span>
                  </p>
                </div>
                {/* <div className="member-list__links">
                  <a href="" className="member-list__link">
                    <img src={LinkedinIcon} alt="linkedin icon" />
                  </a>
                  <a href="" className="member-list__link">
                    <img src={GithubIcon} alt="github icon" />
                  </a>
                  <a href="" className="member-list__link">
                    <img src={TelegramIcon} alt="telegram icon" />
                  </a>
                </div> */}
              </div>
            </li>
            <li className="member-list__item">
              <div className="member-list__info">
                <div>
                  <h2 className="member-list__name">Dostonbek Hasanov</h2>
                  <p className="member-list__occupation">
                    {/* <span>Instructor</span> */}
                    <span className="job">SAT instructor</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
