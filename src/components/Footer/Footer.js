import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "../MailchimpForm/MailchimpForm";
// import logo from "../../assets/imgs/logo.svg";
import aviLogo from "../../assets/imgs/Avi-logo.svg";
import navIcon1 from "../../assets/imgs/nav-icon1.svg";
import navIcon2 from "../../assets/imgs/nav-icon2.svg";
import navIcon3 from "../../assets/imgs/nav-icon3.svg";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img className="footer__logo" src={aviLogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/avi-brar/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/avi.brar.5855/">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/avibrar_99/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
