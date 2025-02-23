// styles
import "./IntroSection.css";
// images
function IntroSection() {
  return (
    <section className="intro-section">
      <div className="container intro-section__container">
        <span className="intro-sentence">Biz haqimizda</span>
        <h1 className="intro-section__title">
          {" "}
          Cody o’quv markazidagi o’qituvchilar bilan tanishing
        </h1>
        <p className="intro-section__text">
          Biz kuchli, g’ayratli, tajribali dasturchilarning kichik guruhimiz.
          Biz sifatli, tez o’rgatamiz va sizlar bilan uchrashishni kutmoqdamiz.
          Bizning demo kurslarimizga kelib, o’z kelajak kasbingizni biz bilan
          boshlang.
        </p>
        <button className="btn intro-section__btn">Kursni boshlash</button>
      </div>
    </section>
  );
}

export default IntroSection;
