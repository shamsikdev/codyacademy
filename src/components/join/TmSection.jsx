// styles
import "./TmSection.css";
// react
function TmSection() {
  return (
    <section className="tm-channel">
      <div className="container tm-channel__container">
        <h1 className="tm-channel__title">Join our telegram channel</h1>
        <p className="tm-channel__text">
          Be the first to know when news are posted!
        </p>
        <a
          className="btn violet-btn tm-channel__btn"
          href="https://t.me/cody_academy"
          target="blank"
        >
          Subscribe
        </a>
        <span className="privacy-policy">
          We care about your data in our <a href="">privacy policy</a>.
        </span>
      </div>
    </section>
  );
}

export default TmSection;
