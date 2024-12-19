import { queryClient } from '@';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { createUser, updateUser } from '@/api/user';
import useMutate from '@hooks/useMutate';

const UserForm = ({ data }) => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [superuser, setSuperuser] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [newName, setNewName] = useState('');

  const { mutate: addUser, isLoading: isAdding } = useMutate({
    fetcher: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      setName('');
      setPassword('');
      setSuperuser(false);
    },
    onError: (error) => {
      console.error('Failed to add user:', error);
    },
  });

  const { mutate: patchUser, isLoading: isPatching } = useMutate({
    fetcher: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries('users');
      setSelectedUserId('');
      setNewName('');
    },
    onError: (error) => {
      console.error('Failed to patch user:', error);
    },
  });

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!name || !password) {
      console.error('Name and password are required.');
      return;
    }
    addUser({ name, password, superuser });
  };

  const handlePatchUser = () => {
    if (!selectedUserId || !newName.trim()) {
      console.error('User and new name are required.');
      return;
    }
    patchUser({ id: selectedUserId, name: newName });
  };

  return (
    <>
      <form onSubmit={handleAddUser}>
        <div>
          <label>{t('username')}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>{t('password')}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>{t('superuser')}</label>
          <input
            type="checkbox"
            checked={superuser}
            onChange={(e) => setSuperuser(e.target.checked)}
          />
        </div>
        <button type="submit" disabled={isAdding}>
          Add User
        </button>
      </form>

      <div>
        <label>
          Select User:
          <select
            value={selectedUserId || ''}
            onChange={(e) => setSelectedUserId(e.target.value)}
          >
            <option value="" disabled>
              Choose a user
            </option>
            {data?.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>
        </label>

        {selectedUserId && (
          <div>
            <label>
              New Name:
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            </label>
            <button onClick={handlePatchUser} disabled={isPatching}>
              Update Name
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default UserForm;
