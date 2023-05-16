import axios from 'axios';
import { useEffect, useState } from "react";

const useAxios = (url, apiKey, method = 'GET') => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  // var myHeaders = new Headers();
  // myHeaders.append("apiKey", { apiKey });
  useEffect(() => {
    setLoaded(true);
    axios({
      url,
      method,
      headers: myHeaders,
      // params: {
      //   api_key: apiKey,
      // },
    })
      .then((res) => setData(res.data))
      .catch((error) => setError(error))
      .finally(setLoaded(false));
  }, [url, apiKey, method]);

  return [data, error, loaded];

};

export default useAxios;