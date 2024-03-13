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
            <span className="location-section__intro intro">Contact us</span>
            <h1 className="location-section__title">Our locations</h1>
            <h4 className="location-section__subtitle">
              Come visit our friendly courses.
            </h4>
          </div>
          <div className="location">
            <svg
              className="location-icon"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="20px"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Location_On">
                <g>
                  <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"></path>
                  <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"></path>
                </g>
              </g>
            </svg>
            <div>
              <h2 className="city">Chust, Namangan</h2>
              <p className="address">
                100 Flinders Street, Melbourne VIC 3000 AU
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ position: "relative", overflow: "hidden", width: "100%" }}
        >
          <a
            href="https://yandex.uz/maps/189938/chust/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "0px",
            }}
          >
            Чуст
          </a>
          <a
            href="https://yandex.uz/maps/geo/771299745/?ll=71.230366%2C41.003403&utm_medium=mapframe&utm_source=maps&z=14.72"
            style={{
              color: "#eee",
              fontSize: "12px",
              position: "absolute",
              top: "14px",
            }}
          >
            Чуст — Яндекс Карты
          </a>
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=71.230366%2C41.003403&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3NzEyOTk3NDUSJk_Ku3piZWtpc3RvbiwgTmFtYW5nYW4gdmlsb3lhdGksIENodXN0IgoN7nOOQhV1AiRC&z=14.72"
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
