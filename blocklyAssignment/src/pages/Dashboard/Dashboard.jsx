import "./Dashboard.css";
import Hi from "../../assets/wave.svg";
import HeroImage from "../../assets/images/hero-image.png";
import DarkSocialLinks from "../../assets/images/dark-social-links.png";
import LightSocialLinks from "../../assets/images/light-social-links.png";
import DarkEmail from "../../assets/images/dark-email.png";
import LightEmail from "../../assets/images/light-email.png";

const Dashboard = ({ lightTheme }) => {
  return (
    <div className="container-fluid dashboard-container">
      <div
        className="row d-flex align-items-center justify-content-center"
        style={{ padding: "10px 50px 10px 50px" }}
      >
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center ">
          <div className="d-flex justify-content-center ">
            <div style={{ padding: "50px 10px 50px 10px" }}>
              <p
                className="fw-bold ms-5  d-flex justify-content-center align-items-center"
                style={{
                  background: "linear-gradient(to right, #32F6F6, #A6A79F)",
                  borderTopRightRadius: "50px",
                  borderBottomRightRadius: "50px",
                  borderTopLeftRadius: "100px",
                  width: "197px",
                  height: "72px",
                  color: "white",
                  fontSize: "36px",
                  textAlign: "center",
                }}
              >
                Hello!
              </p>
              <p
                className="mt-4 ms-5 fw-semibold d-flex align-items-center ms-4"
                style={{ fontSize: "60px" }}
              >
                I'm{" "}
                <span className="text-secondary  underline-text mx-2">
                  Anish
                </span>
                <img src={Hi} alt="wave" />
              </p>
              <p className="fs-3 ms-5">
                UI/UX Designer, Front-End Developer & Thinker. <br /> Based in
                India.
              </p>
              <div className="d-flex align-items-center ms-5 mt-2">
                <button
                  className="shadow p-2 m-0 me-4 d-flex justify-content-center align-items-center border border-4 border-white rounded fw-bold"
                  style={{
                    background: "linear-gradient(to right, #DF580C, #FD993D)",
                    color: "#FEFEFE",
                  }}
                >
                  Download CV
                </button>
                <button
                  className="shadow p-2 m-0 d-flex justify-content-center align-items-center border border-4 border-white rounded fw-bold"
                  style={{
                    background: "linear-gradient(to right, #434343, #000000)",
                    color: "#FEFEFE",
                  }}
                >
                  Get in Touch!
                </button>
              </div>
              <div
                className="me-3"
                style={{ position: "absolute", top: "64%", left: "3%" }}
              >
                <img
                  src={lightTheme ? DarkSocialLinks : LightSocialLinks}
                  alt="social-links"
                  style={{ width: "28px", height: "210px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6  d-flex justify-content-center align-items-center">
          <div className="d-flex ">
            <img
              src={HeroImage}
              alt="hero-image"
              className=""
              style={{ width: "85%" }}
            />
            <img
              src={lightTheme ? DarkEmail : LightEmail}
              alt="email"
              style={{ width: "20px" }}
              className="align-self-end"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
