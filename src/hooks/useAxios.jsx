import axios from 'axios';
import { useEffect, useState } from "react";

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    axios(url)
      .then((res) => setData(res.data))
      .catch((error) => setError(error))
      .finally(setLoaded(false));
  }, [url]);

  return [data, error, loaded];

};

export default useAxios;