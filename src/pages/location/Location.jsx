// styles
import "./Location.css";
// icons
import { CiLocationOn } from "react-icons/ci";
function Location() {
  return (
    <section className="location-section">
      <div className="location-section__container container">
        <div className="location-section__content">
          <div className="location-section__heading">
            <span className="location-section__intro intro">
              Biz bilan bog’lanish
            </span>
            <h1 className="location-section__title">Bizning manzilimiz</h1>
            {/* <h4 className="location-section__subtitle">
              Come visit our friendly courses.
            </h4> */}
          </div>
          <div className="location">
            <div className="location-icon">
              <CiLocationOn className="location-icon__svg" />
            </div>
            <div>
              <h2 className="city">Chust, Namangan</h2>
              <p className="address">Bodomzor oxirgi bekat</p>
            </div>
          </div>
        </div>
        <div
          style={{ position: "relative", overflow: "hidden", width: "100%" }}
        >
          <a
            href="https://yandex.uz/maps/org/204631412650/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0px",
            }}
          >
            Cody
          </a>
          <a
            href="https://yandex.uz/maps/189938/chust/category/educational_center/184106168/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            Учебный центр в Чусте
          </a>
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=71.196793%2C41.011810&mode=search&oid=204631412650&ol=biz&z=16.69"
            width="100%"
            height="516"
            frameborder="1"
            allowfullscreen="true"
            style={{ position: "relative" }}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;
