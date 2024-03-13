// styles
import "./CommentSection.css";
// images
import CommentImage from "../../assets/comment-img.png";
function CommentSection() {
  return (
    <section className="com-section">
      <div className="container com-section__container">
        <img
          src={CommentImage}
          className="com-section__img"
          alt="blond girl image"
        />
        <div className="com-section__content">
          <span className="com-section__star">⭐⭐⭐⭐⭐</span>
          <h3 className="com-section__text">
            “I've been welcomed warmly to the course and now I never want to
            stop learn.”
          </h3>
          <p className="com-section__name">
            — <span className="name">Mathilde Lewis</span>
          </p>
          <span className="com-section__occupation">
            student of Flutter course
          </span>
        </div>
      </div>
    </section>
  );
}

export default CommentSection;
