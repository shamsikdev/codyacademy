// styles
import "./IntroSection.css";
// images
function IntroSection() {
  return (
    <section className="intro-section">
      <div className="container intro-section__container">
        <span className="intro-sentence">Get to know us</span>
        <h1 className="intro-section__title">Meet the teachers behind Cody</h1>
        <p className="intro-section__text">
          We’re a small group of bright, motivated designers and developers.
          We’re teaching fast and would love to meet you. Check out our open
          course!
        </p>
        <button className="btn intro-section__btn">Get started</button>
      </div>
    </section>
  );
}

export default IntroSection;
