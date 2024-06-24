import { useCallback, useState } from "react";
import useMount from "./useMount";

interface IOptions {
  manual: boolean;
  params: Record<string, string>;
  onSuccess: (data: unknown) => void;
  onError: (err: unknown) => void;
}

const useRequest = (
  service: (params: Record<string, string>) => Promise<unknown>,
  options: IOptions
) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(<unknown>null);

  const fetchData = useCallback(
    (
      params: Record<string, string>,
      onSuccess: (data: unknown) => void,
      onError: (err: unknown) => void
    ) => {
      setLoading(true);
      return service(params)
        .then((res) => {
          setData(res);
          setLoading(false);
          if (onSuccess) {
            onSuccess(res);
          }
        })
        .catch((err) => {
          setLoading(false);
          if (onError) {
            onError(err);
          }
        });
    },
    [service]
  );

  // fetch data on mount if it is not manual
  useMount(() => {
    if (!options.manual) {
      fetchData(options.params, options.onSuccess, options.onError);
    }
  });

  const runFetch = (params: Record<string, string>) => {
    fetchData(params, options.onSuccess, options.onError);
  };

  return { loading, data, runFetch };
};

export default useRequest;
