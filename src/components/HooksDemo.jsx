import React, { useState, useEffect } from 'react';
// 5. Hooks Demo: recherche simulée
function HooksDemo() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return setResults([]);

    const timer = setTimeout(() => {
      setResults([`${query} 1`, `${query} 2`, `${query} 3`]);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        style={{ padding: 8, width: '100%', marginBottom: 10 }}
      />
      <ul>
        {results.map((r,i) => <li key={i}>{r}</li>)}
      </ul>
    </div>
  );
}
export default HooksDemo;