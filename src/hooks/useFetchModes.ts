import axios from "axios";
import { useEffect, useState } from "react";
import { IMode } from "../types/mode";

export const useFetchModes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [data, setData] = useState<IMode[]>();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://60816d9073292b0017cdd833.mockapi.io/modes")
      .then((res) => setData(res.data))
      .catch(() => setisError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return {
    isLoading,
    data,
    isError,
  };
};
