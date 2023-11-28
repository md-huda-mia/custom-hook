import React, { useEffect, useState } from "react";

const CustomHook = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fecthdata = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error, error.message);
      } finally {
        setLoading(false);
      }
    };
    fecthdata();
  }, [url]);

  return { data, loading, error };
};

export default CustomHook;
