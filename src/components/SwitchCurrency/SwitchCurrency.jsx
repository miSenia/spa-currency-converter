import React, { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import { Button } from "react-bootstrap";
import styles from './SwitchCurrency.module.scss';

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
    <Button onClick={handleSwitch} class="btn btn-primary-outline" className={styles.switch_button}>
      <i class="bi bi-arrow-left-right"></i>
    </Button>
  );
};

export default SwitchCurrency;