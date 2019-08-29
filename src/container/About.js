import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import icon2 from "./icon2.png";
import fb from "./fb.png";
import ig from "./ig.png";
import yt from "./yt.png";
import tele from "./tele.png";
import "../App.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about">
        <Container>
          <Row>
            <Col>
              <img className="logo1" src={icon2} alt="logo" />
            </Col>
            <Col className="isi">
              <img className="medsos" src={fb} alt="logo" />
              <h3>< a href="https://www.facebook.com/elhoedzay.hoedzay">fb: Ibnu Ahmad Al-Jugjawy</ a></h3>
              <br />
              <img className="medsos" src={ig} alt="logo" />
              <h3>< a href="https://www.instagram.com/hdzfh_1610/?hl=id">IG: hdzfh_1610</ a></h3>
              <br />
              <img className="medsos" src={yt} alt="logo" />
              <h3>< a href="https://www.youtube.com/channel/UCO3Y2tF4-ZeDmeoVXPOOkJA?view_as=subscriber">Youtube: Hudzaifah 1610</ a></h3>
              <br />
              <img className="medsos" src={tele} alt="logo" />
              <h3>< a href="https://web.telegram.org/#/im?p=u927529190_11401904521028744177">Telegram: Hudzaifah Al-Jugjawy</ a></h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
