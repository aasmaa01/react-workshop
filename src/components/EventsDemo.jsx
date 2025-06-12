import React, { useState } from 'react';
// 6. Events Demo: formulaire et button
function EventsDemo() {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault(); //THIS  
    alert(`Vous avez soumis: ${text}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Tapez quelque chose"
        style={{ padding: 8, marginRight: 10 }}
      />
      <button type="submit">Envoyer</button>
    </form>
  );
}
export default EventsDemo;