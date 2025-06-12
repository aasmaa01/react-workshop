
//import './JSXDemo.css';
// 2. JSX Demo: rendu d'une liste d'objets
function JSXDemo() {
  const items = [
    { id: 1, label: 'Strawberry', avatar: 'https://i.pinimg.com/736x/37/5e/15/375e1521c8c97f1d8fe0b9cc745d70cd.jpg' },
    { id: 2, label: 'kiwi', avatar:'https://i.pinimg.com/736x/d6/6b/25/d66b257fa3fb12c27b3b0e5f9ebf3885.jpg' },
    { id: 3, label: 'Apple' , avatar: 'https://i.pinimg.com/736x/9b/00/ab/9b00abdee7168f42a798e0a1fa8f0c19.jpg'}
  ];

  return (
    <ul>
{items.map(item => (
  <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
    <img src={item.avatar} alt={item.label} style={{ width: 50, height: 50, borderRadius: '50%' }} />

    <li style={{ listStyle: 'none', margin: 0, padding: 0 }}>{item.label.toUpperCase()}</li>
  </div>
))}
    </ul>
  );
}

export default JSXDemo;