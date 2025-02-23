// styles
import "./TmSection.css";
// react
function TmSection() {
  return (
    <section className="tm-channel">
      <div className="container tm-channel__container">
        <h1 className="tm-channel__title">
          Telegram kanalimizga obuna bo’ling
        </h1>
        <p className="tm-channel__text">
          O’quv markazimiz haqidagi yangiliklardan birinchilardan bo’lib
          xabardor bo’ling!
        </p>
        <a
          className="btn violet-btn tm-channel__btn"
          href="https://t.me/cody_academy"
          target="blank"
        >
          Obuna bo'lish
        </a>
      </div>
    </section>
  );
}

export default TmSection;
