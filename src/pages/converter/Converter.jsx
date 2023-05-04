import React from "react";
import AmountInput from "../../components/AmountInput/AmountInput";
import SelectCountry from "../../components/SelectCountry/SelectCountry";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const Converter = () => {
  return (
    <Container style={{ position: "absolute", top: 100, start: 50, backgroundColor: "white" }} >
      <Row>
        <Col md={6}><Link to="/">Converter</Link></Col>
        <Col md={6}><Link to="/currencies">Currencies</Link></Col>
      </Row>
      <Row>
        <AmountInput></AmountInput>
         <SelectCountry/> {/*value={fromCurrency} setValue={setFromCurrency} label="From" /> */}
        {/* <SwitchCurrency /> */}
        {/* <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" /> */}
      </Row>
      <Row>
        <Col md={3} className="output">
          <></>
        </Col>
        <Col md={3} className="button">
          <Button variant="primary" type="submit" style={{ width: "50%", border: "none" }}>Convert</Button>
        </Col>
      </Row>
    </Container>
  );
};


export { Converter };