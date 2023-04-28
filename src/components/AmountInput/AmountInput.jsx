import React, { useState, useContext } from "react";
import Form from 'react-bootstrap/Form';
import { Col, FormGroup, FormControl } from "react-bootstrap";
import { CurrencyContext } from "../context/CurrencyContext";

const AmountInput = () => {
  const { firstAmount, setFirstAmount } = useContext(CurrencyContext);

  return (
    <div className="amount-container">
      <Col md={4} className="message-input">
        <Form>
          <FormGroup>
            <FormControl
              type="number"
              placeholder="Amount"
              value={firstAmount}
              onChange={e => setFirstAmount(e.target.value)}
              style={{}}
              id="amount">
            </FormControl>
          </FormGroup>
        </Form>
      </Col>
    </div>
  );
};

export { AmountInput };