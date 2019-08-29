import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import icon2 from  './icon2.png'

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="profile">
        <Container>
          <Row>
            <Col>
            <img className="logo" src={icon2} alt="logo"/>
            </Col>
            <Col className="isi">
            <h2>Name: Hudzaifah</h2>
            <h2>School: Boarding School Information and Technology Programmer</h2>
            <h2>Division: Front-End Developer</h2>
            <h2>Hobby: Reading & Ngoding</h2>
            <h2>Status: Single</h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
