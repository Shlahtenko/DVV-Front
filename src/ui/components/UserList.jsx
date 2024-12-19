import { queryClient } from '@';

import User from '@components/User';
import { deleteUser } from '@core/api/user';
import useMutate from '@hooks/useMutate';

const UserList = ({ data }) => {
  const { mutate: deleteUserData, isLoading: isDeleting } = useMutate({
    fetcher: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      console.error('Error deleting user:', error);
    },
  });

  const removeUser = (userId) => {
    deleteUserData({ userId });
  };

  return (
    <>
      {data.map((user) => (
        <User
          key={user._id}
          id={user._id}
          username={user.name}
          removeUser={removeUser}
        />
      ))}
    </>
  );
};

export default UserList;
