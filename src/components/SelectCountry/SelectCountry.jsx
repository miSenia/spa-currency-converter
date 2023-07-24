import { useLatest } from "../../hooks/useAxios";
import { Dropdown } from "react-bootstrap";
import styles from './SelectCountry.module.scss';
  
const SelectCountry = (props) => {

  const { value, setValue, onSelect } = props;
  const [data, loading, error] = useLatest();

  const handleSelect = (eventKey) => {
    console.log('eventKey', eventKey);
    setValue(eventKey);
  }

  return (
    { loading }
      ? <Dropdown onSelect={handleSelect} className={styles.dropdown_container}>
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-currency" size="ld" value="USD" style={{width:"100%"}}>
          {value ? value : 'Select currency'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {data?.data &&
            (
              Object.keys(data.data).map((currency, index) => (
                Boolean(currency)
                  ? <Dropdown.Item key={index} eventKey={currency}>
                    {currency}
                  </Dropdown.Item>
                  : <></>
              ))
            )
          }
        </Dropdown.Menu>
      </Dropdown>
      : <div className="loader"></div>
  )
}

export default SelectCountry;