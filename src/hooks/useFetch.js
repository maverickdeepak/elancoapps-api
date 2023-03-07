import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
        setError("");
      } catch (error) {
        setError("Something went wrong! ❌");
        throw new Error(error);
      }
    };
    fetchApiData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
