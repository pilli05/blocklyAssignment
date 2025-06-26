import "./About.css";
import RightVector from "../../assets/images/right-vector.png";
import BottomLeftVector from "../../assets/images/bottom-left-vector.png";
import BottomRightVector from "../../assets/images/bottom-right-vector.png";
import DarkEmail from "../../assets/images/dark-email.png";
import LightEmail from "../../assets/images/light-email.png";
import DarkSocialLinks from "../../assets/images/dark-social-links.png";
import LightSocialLinks from "../../assets/images/light-social-links.png";
import LeftHandVector from "../../assets/images/left-hand-vector.png";

const About = ({ lightTheme }) => {
  return (
    <div className="container-fluid dashboard-container">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-2 d-none  d-md-flex flex-column  align-items-center">
          <div className="">
            <img src={LeftHandVector} alt="logo" className="w-100" />
          </div>
          <img
            src={lightTheme ? DarkSocialLinks : LightSocialLinks}
            alt="logo"
            className=""
            style={{ width: "28px", height: "210px" }}
          />
        </div>
        <div
          className="col-12 col-md-8"
          style={{
            fontWeight: "200",
          }}
        >
          <div className="d-flex">
            <p className="fw-bold me-5" style={{ fontSize: "36px" }}>
              This is it. ;)
            </p>
            <p
              className="w-50 d-none d-md-block"
              style={{ borderBottom: "2px solid gray" }}
            ></p>
          </div>
          <p className="">
            Anish Kr. Sinha is an Indian{" "}
            <span className="fw-bold">
              UI/UX Designer & Front End Developer
            </span>
            with a passion for designing beautiful and functional user
            experiences. Typically, he’s Driven & permanently Curious. He’s
            obsessed with designing things and even more obsessed with designing
            cool & clean stuff for the web and mobile. He has been in the
            business of creating since he hung his first painting on the wall
            when he was 11. <br />
            He holds a{" "}
            <span className="fw-bold">
              bachelor degree in Computer Applications.
            </span>
            During his graduation, he has been actively involved in the web
            design community for the last 3 years. he has designed websites for
            small businesses, events, nonprofits and more. Currently he’s based
            in Bihar, India. Where he’s working as an independent creative.
          </p>
          <p>
            His interests, however, extend beyond the web and he loves helping
            people with branding and print design. He even loves designing{" "}
            <span className="fw-bold">3D floor plan.</span>
          </p>
          <p>
            When he’s not designing, he’s probably hanging out with his
            girlfriend, watching series, sketching or messing around on
            something inspired by YouTube tutorials.
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <p
              style={{
                borderBottom: "2px solid gray",
                width: "200px",
                alignSelf: "center",
              }}
            ></p>
          </div>
          <div className="d-flex justify-content-between">
            <img
              src={BottomLeftVector}
              alt="logo"
              className=""
              style={{ width: "150px", height: "150px" }}
            />
            <img
              src={BottomRightVector}
              alt="logo"
              className=""
              style={{ width: "150px", height: "180px" }}
            />
          </div>
        </div>
        <div className="col-2 d-none d-md-flex flex-column  align-items-center">
          <img src={RightVector} alt="logo" style={{ width: "70%" }} />
          <img
            src={lightTheme ? DarkEmail : LightEmail}
            alt="logo"
            className="mt-0"
            style={{ width: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
