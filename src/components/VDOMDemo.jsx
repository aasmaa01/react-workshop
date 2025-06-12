

// 1. VDOM Demo: compteur et changement de couleur
import React, { useState } from 'react';
function VDOMDemo() {
  const [count, setCount] = useState(0);
  const colors = ['#ffdddd', '#ddffdd', '#ddddff'];

  return (
    <div style={{ padding: 10,color: '#333', background: colors[count % colors.length] }}>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}

export default VDOMDemo;
