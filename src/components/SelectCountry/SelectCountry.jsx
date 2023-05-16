import { useState } from 'react';
import useAxios from "../../hooks/useAxios";
import { Dropdown } from "react-bootstrap";//разница между строками

const SelectCountry = (value, setValue, onSelect) => {

  const [data, loaded, error] = useAxios(`https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}`, 'CqIeFWTzFIDwXngqoLx43o18yf4UQQ5i');

  const [selectedCurrency, setSelectedCurrency] = useState('');

  const handleSelect = (eventKey) => {
    setSelectedCurrency(eventKey);
  }

  console.log(data)
  return (
    <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="outline-secondary" id="dropdown-currency" size="ld">
        {selectedCurrency ? selectedCurrency : 'Select currency'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {data.map((country, index) => (
          Boolean(country.currencies)
            ? <Dropdown.Item key={index} eventKey={Object.keys(country.currencies)[0]}> 
              {Object.keys(country.currencies)[0]}
            </Dropdown.Item>
            : <></>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default SelectCountry;

// const [data, loaded, error] = useAxios("https://restcountries.com/v3.1/all");//loaded, какой может быть error, data - массив объектов!!!
// // loaded(для отслеживания состояния загрузки данных из api): true - данные загружаются, false - после их получения
// //error - любая ошибка(Network error, Timeout Error, Request failed with status code 404,Request failed with status code 500, Parsing Error )
// const [selectedCurrency, setSelectedCurrency] = useState('');

// const handleSelect = (eventKey) => {
//   setSelectedCurrency(eventKey);
//   // onSelect(eventKey);
// }

// console.log(data)
// return (
//   <Dropdown onSelect={handleSelect}>
//     <Dropdown.Toggle variant="outline-secondary" id="dropdown-currency" size="ld">
//       {selectedCurrency ? selectedCurrency : 'Select currency'}
//     </Dropdown.Toggle>
//     <Dropdown.Menu>
//        {/*проверка на наличие currencies для страны во вр итерации по каждому эл массива*/}
//       {data.map((country, index) => (
//         Boolean(country.currencies)
//           ? <Dropdown.Item key={index} eventKey={Object.keys(country.currencies)[0]}> 
//             {/* значением eventKey явл первый ключ объекта country.currencies*/}
//             {Object.keys(country.currencies)[0]}
//            {/* в качестве текста внутри item */}
//           </Dropdown.Item>
//           : <></>
//       ))}
//     </Dropdown.Menu>
//   </Dropdown>
// )
// }