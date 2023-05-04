import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoaded(false);
      })
      .catch((error) => setError(error));
  }, [url]);

  return [data, error, loaded];

};

export default useFetch;