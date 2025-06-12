import React from 'react';
// 3. Components Demo: composant Button réutilisable
function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ padding: '8px 16px', margin: 5, borderRadius: 4, border: '1px solid #ccc' }}
    >
      {children}
    </button>
  );
}

function ComponentsDemo() {
  const handleClick = label => alert(`Vous avez cliqué sur: ${label}`);

  return (
    <div>
      <Button onClick={() => handleClick('Button A')}>Button A</Button>

      <Button onClick={() => handleClick('Button B')}>Button B</Button>
    </div>
  );
}
export default ComponentsDemo;