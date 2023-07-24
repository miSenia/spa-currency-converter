import React, { useContext, useEffect, useState } from "react";
import AmountInput from "../../components/AmountInput/AmountInput";
import SelectCountry from "../../components/SelectCountry/SelectCountry";
import SwitchCurrency from "../../components/SwitchCurrency/SwitchCurrency";
import LinkBar from "../../components/LinksBar/LinkBar";
import { Card, Col, Container, Row } from "react-bootstrap";
import { CurrencyContext } from "../../context/CurrencyContext";
import { useLatest } from "../../hooks/useAxios";
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

  const [data] = useLatest(fromCurrency);
  const rates = Object.entries(data.data || {});

  const [result, setResult] = useState(0);

  useEffect(() => {
    const rate = data?.data && data?.data[toCurrency] || 1;
    const newValue = firstAmount * rate;
    setResult(newValue);
  }, [data, firstAmount, fromCurrency, toCurrency])
//класс из модуля идёт раньше класса react-strap ??
  //typescript
  return (
    <>
      <h2>Currency Converter</h2>
      <Container className={styles.converter_container}>
        <LinkBar></LinkBar>
        <Row className={styles.currency_container}>
          <Row className={cn(styles.currency_container__input)}>
            <Col md={6} className={ styles.amount_input}><AmountInput></AmountInput></Col>
            <Col><SelectCountry value={fromCurrency} setValue={setFromCurrency} /></Col>
            <Col><SwitchCurrency /></Col>
            <Col><SelectCountry value={toCurrency} setValue={setToCurrency} /></Col>
          </Row>
          <Row className={cn(styles.currency_container__output)}>
            <Col md = {9} >
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