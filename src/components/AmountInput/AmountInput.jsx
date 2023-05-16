import React, { useContext } from "react";
import Form from 'react-bootstrap/Form';
import { FormGroup, FormControl } from "react-bootstrap";
import { CurrencyContext } from "../../context/CurrencyContext";

const AmountInput = () => {
  const { firstAmount, setFirstAmount} = useContext(CurrencyContext);

  return (
        <Form className="amount-input">
          <FormGroup>
            <FormControl
              id="amount"
              type="number"
              placeholder="Amount"
              value={firstAmount}
              onChange={e => setFirstAmount(e.target.value)}
              style={{width:"100%"}}
            >
            </FormControl>
          </FormGroup>
        </Form>
  );
};

export default AmountInput;