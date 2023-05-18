import React, { useContext, useState } from "react";
import AmountInput from "../../components/AmountInput/AmountInput";
import SelectCountry from "../../components/SelectCountry/SelectCountry";
import SwitchCurrency from "../../components/SwitchCurrency/SwitchCurrency";
import LinkBar from "../../components/LinksBar/LinkBar";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { CurrencyContext } from "../../context/CurrencyContext";


const Converter = () => {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
  } = useContext(CurrencyContext);
  const [result, setResult] = useState(0);

  return (
    <>
    <h2>Currency Converter</h2>
    <Container style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", width: "50%", boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)", borderRadius: "1rem", padding: "0" }} >
      <LinkBar></LinkBar>
      <Row className="converter-container" style={{ padding: "2rem", margin: "0" }}>
        <Row className="input-container" style={{ paddingBottom: "2rem" }}>
          <Col md={6}><AmountInput></AmountInput></Col>
          <Col><SelectCountry value={fromCurrency} setValue={setFromCurrency} /></Col>
          <Col><SwitchCurrency /></Col>
          <Col><SelectCountry value={toCurrency} setValue={setToCurrency} /></Col>
        </Row>
        <Row className="output-container" >
          <Col md={9}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title style={{ color: "grey" }}>Converted Amount</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="button">
            <Button variant="primary" type="submit" style={{ width: "100%", border: "none" }}>Convert</Button>
          </Col>
        </Row>
      </Row>
      </Container>
      </>
  );
};


export { Converter };