import { createContext, useState } from "react";

export const CurrencyContext = createContext({
  fromCurrency: '',
  setFromCurrency: () => { },
  toCurrency: '',
  setToCurrency: () => { },
  firstAmount: '',
  setFirstAmount: () => { },
  extraValue: undefined
});

const CurrencyProvider = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [firstAmount, setFirstAmount] = useState("");

  const value = {   // проп value определяет текущее значение ближайшего <CurrencyContext.Provider>
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    firstAmount,
    setFirstAmount,
    extraValue: 'loaded'
  };

  return ( //вызывается повторный рендер с последним значением контекста, переданным провайдеру CurrencyContext
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
