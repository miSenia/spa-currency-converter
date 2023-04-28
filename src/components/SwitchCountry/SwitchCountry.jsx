import React,  { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

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
    <></>
  );
};

export { SwitchCurrency };