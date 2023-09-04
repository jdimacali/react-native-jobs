import { useState, useEffect, SetStateAction } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";

const rapidApiKey = RAPID_API_KEY;

interface UseFetchProps {
  endpoint: string;
  query: {};
}

const useFetch = ({ endpoint, query }: UseFetchProps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.request(options);
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error: any) {
      setError(error);
      alert("An error occured");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useFetch;
