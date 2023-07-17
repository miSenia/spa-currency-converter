import { useEffect, useState } from "react";

export const useAxios = (url, method = 'GET') => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  var myHeaders = new Headers();
  myHeaders.append("apiKey", 'FMpAo8Oo1UFpqSZm9k9qKYbZq7Q53jVTSfAg4scc');

  useEffect(() => {
    setLoaded(true);
    fetch(
      `https://api.freecurrencyapi.com/v1/${url}`,
      {
        method,
        redirect: 'follow',
        headers: myHeaders,
      },
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => setError(error))
      .finally(setLoaded(false));
  }, [url, method]);

  return [data, error, loaded];
};

export const useCurrencies = () => {
  return useAxios('currencies')
};

export const useLatest = () => {
  return useAxios('latest')
};

// export const useSymbols = () => {
//   return useAxios('/exchangerates_data/symbols')
// }

// /**
//  * 
//  * @param {{ from: string; to: string; amount: number }} params 
//  * @returns 
//  */

// curl --request GET 'https://api.apilayer.com/currency_data/convert?base=USD&symbols=EUR,GBP,JPY&amount=5&date=2018-01-01' \
// --header 'apikey: YOUR API KEY' -- исп для конвертации сразу нескольких валют 

// export const useConvert = (params) => {
//   // return useAxios(`/exchangerates_data/convert?to=${params.to}&from=${params.from}&amount=${params.amount}`)
//   const result = {
//     "success": true,
//     "query": {
//       "from": "BYN",
//       "to": "USD",
//       "amount": 25
//     },
//     "info": {
//       "timestamp": 1684326963,
//       "rate": 0.396283
//     },
//     "date": "2023-05-17",
//     "result": 9.907075
//   };

//   return [result, null, false];
// }

export default useAxios;