import React, { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import { Button } from "react-bootstrap";


const SwitchCurrency = () => {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency
  } = useContext(CurrencyContext)

  const handleSwitch = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  return (
    <Button onClick={handleSwitch} class="btn btn-outline">
      <i class="bi bi-arrow-left-right"></i>
    </Button>
  );
};

export default SwitchCurrency;