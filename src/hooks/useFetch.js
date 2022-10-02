import { useEffect, useState } from "react";

export const useFetch = (url = "") => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const abortController = new AbortController();
    setData(false);
    if (url === "") {
      return;
    }
    setLoading(true);

    fetch(url, { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) {
          throw Error(`error ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        setData(data);
        setError(false);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(true);
          setData(null);
          setLoading(false);
        }
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, error, loading };
};
