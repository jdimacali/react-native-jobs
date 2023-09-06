import { useState, useEffect, Dispatch, SetStateAction } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";
import { JobData } from "../types/types";

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint: string, query: {}) => {
  const [data, setData] = useState<JobData[] | any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
