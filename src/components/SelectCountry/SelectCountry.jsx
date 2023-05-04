import { useFetch } from "../../hooks/useFetch";
import { Dropdown } from "react-bootstrap";
import { useState } from 'react';
 
const SelectCountry = (currencies, onSelect) => {
  //const { value, setValue, label } = props;
  //const [data, loaded, error] = useFetch("https://restcountries.com/v3.1/all");
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const handleSelect = (eventKey) => {
    setSelectedCurrency(eventKey);
    onSelect(eventKey);
  }

  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="secondary" id="dropdown-currency">
        {selectedCurrency ? selectedCurrency : 'Select Currency'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {currencies.map((currency, index) => (
          <Dropdown.Item key={index} eventKey={currency}>
            {currency}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SelectCountry;