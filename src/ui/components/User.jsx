const Card = ({ id, username, removeUser }) => {
  const handleRemove = () => {
    console.log('Removing a user...');
    console.log(id);
    removeUser(id);
  };

  return (
    <div>
      <p>{username}</p>
      <button onClick={handleRemove}>X</button>
    </div>
  );
};

export default Card;
