import { useMutation } from '@tanstack/react-query';

const useMutate = ({ fetcher, onSuccess, onError, ...mutationProps }) => {
  const { mutate, isLoading, error, data } = useMutation({
    mutationFn: fetcher,
    onSuccess,
    onError,
    ...mutationProps,
  });

  return { mutate, isLoading, error, data };
};

export default useMutate;
