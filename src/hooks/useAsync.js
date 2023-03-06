import { useCallback, useEffect, useState } from "react";

export function useFucn(func, dependencies = []) {
  const { execute, ...state } = useAsyncInternal(func, dependencies, true);

  useEffect(() => {
    execute();
  }, [execute]);

  return state
}

export async function useAsync(func, dependencies = []) {
  return useAsyncInternal(func, dependencies, false);
}

export async function useAsyncInternal(
  func,
  dependencies = [],
  initalLoading = false
) {
  const [loading, setLoading] = useState(initalLoading);
  const [error, setError] = useState();
  const [value, setValue] = useState();

  const execute = useCallback((...params) => {
    setLoading(true);
    return func(...params)
      .then((data) => {
        setValue(data);
        setError(undefined);
        return data;
      })
      .catch((err) => {
        setValue(undefined);
        setError(err);
        return Promise.reject(err);
      })
      .finally(() => setLoading(false));
  }, dependencies);

  return { loading, error, value, execute };
}
