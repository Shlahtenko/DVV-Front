import { useQuery } from '@tanstack/react-query';

const useFetch = ({
  fetcher,
  keys = [],
  params,
  refetchOnWindowFocus = false,
  ...queryProps
}) => {
  const { data, error, isFetching, refetch } = useQuery({
    queryKey: [...keys, params],
    queryFn: () => fetcher(params),
    refetchOnWindowFocus,
    ...queryProps,
  });

  return { data, error, isFetching, refetch };
};

export default useFetch;
