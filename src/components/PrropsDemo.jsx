
// 4. Props Demo: UserCard avec callback
function UserCard({ name, avatar, onSelect }) {
  return (
    <div
      onClick={() => onSelect(name)}
      style={{ cursor: 'pointer', display: 'inline-block', margin: 10, textAlign: 'center' }}
    >
      <img src={avatar} alt={name} style={{ width: 60, borderRadius: '50%' }} />
      <p>{name}</p>
    </div>
  );
}

function PropsDemo() {
  const users = [
    { name: 'User1', avatar: 'https://i.pinimg.com/736x/f7/1e/9e/f71e9e875442c09820a68388bd03196f.jpg' },
    { name: 'User2', avatar: 'https://i.pinimg.com/736x/ec/eb/c8/ecebc85cf517b52a825ffe572cc872a9.jpg' },
    { name: 'User3', avatar: 'https://i.pinimg.com/736x/9e/a5/81/9ea58185a4f33040016339a68586e204.jpg' }
  ];

  const handleSelect = name => alert(`User sélectionné: ${name}`);

  return (
    <div>
      {users.map(u => (
        <UserCard key={u.name} name={u.name} avatar={u.avatar} onSelect={handleSelect} />
      ))}
    </div>
  );
}
export default PropsDemo;