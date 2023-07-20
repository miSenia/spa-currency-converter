import React, { useContext, useEffect, useState } from "react";
import AmountInput from "../../components/AmountInput/AmountInput";
import SelectCountry from "../../components/SelectCountry/SelectCountry";
import SwitchCurrency from "../../components/SwitchCurrency/SwitchCurrency";
import LinkBar from "../../components/LinksBar/LinkBar";
import { Card, Col, Container, Row } from "react-bootstrap";
import { CurrencyContext } from "../../context/CurrencyContext";
import { useLatest } from "../../hooks/useAxios";

const Converter = () => {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
  } = useContext(CurrencyContext);

  const [data] = useLatest(fromCurrency);
  const rates = Object.entries(data.data || {});

  const [result, setResult] = useState(0);

  useEffect(() => {
    // console.log('debug', data, firstAmount, fromCurrency, toCurrency);
    const rate = data?.data && data?.data[toCurrency] || 1;
    const newValue = firstAmount * rate;
    setResult(newValue);
  }, [data, firstAmount, fromCurrency, toCurrency])

  return (
    <>
      <h2>Currency Converter</h2>
      <Container className="converter-container" style={{
        backgroundColor: "white",
        width: "50%",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        borderRadius: "1rem",
        padding: "0"
      }} >
        <LinkBar></LinkBar>
        <Row className="currency-container" style={{ padding: "2rem", paddingTop: "0rem", margin: "0" }}>
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
                  <Card.Title style={{ color: "grey" }}>
                    {result ? result : "Converted amount"}
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};


export { Converter };