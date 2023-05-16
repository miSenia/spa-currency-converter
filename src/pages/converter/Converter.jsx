import React, { useContext, useState } from "react";
import AmountInput from "../../components/AmountInput/AmountInput";
import SelectCountry from "../../components/SelectCountry/SelectCountry";
import SwitchCurrency from "../../components/SwitchCurrency/SwitchCurrency";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { NavLink, Link, useLocation } from "react-router-dom";
import { CurrencyContext } from "../../context/CurrencyContext";
import cn from 'classnames';
import styles from './Converter.module.scss';


const Converter = () => {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
  } = useContext(CurrencyContext);
  const [result, setResult] = useState(0);
  const location = useLocation();
  
  return (
    <Container style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", width: "50%", padding: "2rem", boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)", borderRadius: "1rem" }} >
      <Row className="links-container" style={{textAlign:"center"}}>
        <Col md={6}>
          {/* <NavLink to="/" className={styles.page_link} activeClassName={styles.page_link__active}><i class="bi bi-currency-exchange" style={{ padding: "4px" }}></i>Converter</NavLink>  */}
           <Link to="/" className={cn(styles.page_link, { [styles.page_link__active]: location.pathname === '/' })}><i class="bi bi-currency-exchange" style={{ padding: "4px" }}></i>Converter</Link>
        </Col>
        <Col md={6}>
           {/* <NavLink to="/currencies" className={styles.page_link} activeClassName={styles.page_link__active}><i class="bi bi-graph-up" style={{ padding: "4px" }}></i>Currencies</NavLink> */}
          <Link to="/currencies" className={cn(styles.page_link,  {[styles.page_link__active]: location.pathname === '/currencies' })}><i class="bi bi-graph-up" style={{ padding: "4px" }}></i>Currencies</Link>
        </Col>
      </Row>
      <Row className="converter-container" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <Col md={5}><AmountInput></AmountInput></Col>
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
    </Container>
  );
};


export { Converter };