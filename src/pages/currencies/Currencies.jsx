import React, { useState } from "react";
import LinkBar from "../../components/LinksBar/LinkBar";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import useAxios from "../../hooks/useAxios";

const Currencies = () => {

  const [currencies, setCurrencies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (currency) => {
    setFavorites([...favorites, currency]);
  };


  return (
    <>
      <h2>Currency Exchange Rates</h2>
      <Container style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", width: "50%", boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)", borderRadius: "1rem", padding: "0" }} >
        <LinkBar></LinkBar>
        <Row>
          {currencies.map((currency) => {
            <Col key={currency.code} md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{currency.code}</Card.Title>
                <Card.Text>
                  <strong>Rate: </strong> {currency.rate}
                </Card.Text>
                <Button class="btn btn-outline"onClick={() => addToFavorites(currency)}><i class="bi bi-heart"></i></Button>
              </Card.Body>
            </Card>
          </Col>
          })}
        </Row>
      </Container>
    </>
  );
};

export { Currencies };