import React, { useState, useEffect } from "react";
import LinkBar from "../../components/LinksBar/LinkBar";
import { Container, Table, Button } from "react-bootstrap";
import { useLatest } from "../../hooks/useAxios";
import './Currencies.module.scss';

const Currencies = () => {

  const [favorites, setFavorites] = useState(null);
  const [data, loading] = useLatest();

  const addToFavorites = (currency) => {
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites];
      newFavorites.unshift(currency);
      return newFavorites;
    });
  };

  const removeFromFavorites = (currency) => {
    setFavorites((prevFavorites) => {
      return prevFavorites.filter((favCurrency) => favCurrency !== currency);
    })
  }

  useEffect(() => {
    try {
      const savedFavorites = localStorage.getItem('favorites');
      setFavorites(JSON.parse(savedFavorites) || []);
    }
    catch (err) {
      console.error("Error parsing favorite currencies from localStorage", err);
    }
  }, []);


  useEffect(() => {
    // TODO: может сделать favorites не null
    if (favorites !== null) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  const currenciesWithoutFav = Object.keys(data.data || {})
    .filter((currency) => favorites && !favorites.includes(currency));
  const sortedCurrencies = (favorites || []).sort().concat(currenciesWithoutFav.sort());


  return (
    <>
      <h2>Currency Exchange Rates</h2>
      <Container style={{
        width: "50%",
        backgroundColor: "white",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        borderRadius: "1rem",
        padding: "0",
      }} >
        <LinkBar></LinkBar>
          <Table striped responsive>
            <thead>
              <tr>
                <th scope="col" class="w-25 text-center">Currency</th>
                <th scope="col" class="w-50 text-center">Exchange rate</th>
                <th scope="col" class="w-25 text-center">Favorite</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              {data?.data &&
                (
                  sortedCurrencies.map((currency, index) => (
                    <tr key={index}>
                      <td className="text-center">{currency}</td>
                      <td className="text-center">{data.data[currency]}</td>
                      <td className="text-center">
                        <Button class="btn btn-outline-primary" onClick={() => {
                          if (favorites && favorites.includes(currency)) {
                            removeFromFavorites(currency)
                          } else {
                            addToFavorites(currency)
                          }
                        }}>
                          {(() => {
                            if (favorites && favorites.includes(currency)) {
                              return <i class="bi bi-heart-fill"></i>
                            } else {
                              return <i class="bi bi-heart"></i>
                            }
                          })()}
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
            </tbody>
          </Table>
      </Container>
    </>
  );
};

export { Currencies };