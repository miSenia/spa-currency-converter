import React, { useContext } from "react";
import Form from 'react-bootstrap/Form';
import { Col, FormGroup, FormControl } from "react-bootstrap";
import { CurrencyContext } from "../../context/CurrencyContext";

const AmountInput = () => {
  const { firstAmount, setFirstAmount, extraValue } = useContext(CurrencyContext);

  // console.log('setFirstAmount', setFirstAmount);
  console.log('extraValue', extraValue);

  return (
    <div className="amount-container">
      <Col md={3} className="amount-input" style={{padding: "1rem"}}>
        <Form>
          <FormGroup>
            <FormControl
              id="amount"
              type="number"
              placeholder="Amount"
              value={firstAmount}
              onChange={e => setFirstAmount(e.target.value)}
              style={{}}
            >
            </FormControl>
          </FormGroup>
        </Form>
      </Col>
    </div>
  );
};

export default AmountInput;