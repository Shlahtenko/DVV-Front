import { useQuery } from '@tanstack/react-query';

const useFetch = ({
  fetcher,
  keys = [],
  params,
  refetchOnWindowFocus = false,
  keepPreviousData = true,
  ...queryProps
}) => {
  const { data, error, isFetching } = useQuery({
    queryKey: [...keys, params],
    queryFn: () => fetcher(params),
    refetchOnWindowFocus,
    keepPreviousData,
    ...queryProps,
  });

  return { data, error, isFetching };
};

export default useFetch;
