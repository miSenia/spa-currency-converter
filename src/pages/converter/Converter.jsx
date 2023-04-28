import React from "react";
import AmountInput from "../../components/AmountInput/AmountInput";
import { Button, Col, Container, Row } from "react-bootstrap";


const Converter = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={5}>
          <AmountInput></AmountInput>
          {/* <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From" /> */}
          {/* <SwitchCurrency /> */}
          {/* <SelectCountry value={toCurrency} setValue={setToCurrency} label="To" /> */}
          <Button variant="primary" type="submit" style={{ width: "50%", border: "none" }}></Button>
        </Col>
      </Row>
    </Container>
  );
};


export { Converter };