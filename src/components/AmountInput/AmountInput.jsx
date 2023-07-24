import React, { useContext } from "react";
import Form from 'react-bootstrap/Form';
import { FormGroup, FormControl } from "react-bootstrap";
import { CurrencyContext } from "../../context/CurrencyContext";

const AmountInput = () => {
  const { firstAmount, setFirstAmount} = useContext(CurrencyContext);

  return (
    <Form>
          <FormGroup>
            <FormControl
              id="amount"
              type="number"
              placeholder="Amount"
              value={firstAmount}
              onChange={e => setFirstAmount(e.target.value)}
            >
            </FormControl>
          </FormGroup>
        </Form>
  );
};

export default AmountInput;