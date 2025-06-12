import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import VDOMDemo from './components/VDOMDemo';
import JSXDemo from './components/JSXDemo';
import ComponentsDemo from './components/ComponentsDemo';
import PropsDemo from './components/PrropsDemo';
import HooksDemo from './components/HooksDemo';
import EventsDemo from './components/EventsDemo';

// Liste des rubriques
const topics = [
  'VDOM',
  'JSX',
  'Components',
  'Props',
  'Hooks',
  'Events'
];

// Encapsule chaque section
function Section({ title, children }) {
  return (
    <section style={{ padding: '20px', border: '1px solid #eee', borderRadius: 8, marginBottom: 20 }}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}



// Mapping et navigation
const demoMap = { VDOM: VDOMDemo, JSX: JSXDemo, Components: ComponentsDemo, Props: PropsDemo, Hooks: HooksDemo, Events: EventsDemo };

export default function App() {
  const [active, setActive] = useState(topics[0]);
  const ActiveComp = demoMap[active];

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Intro to React Workshop</h1>
      <img src="https://reactjs.org/logo-og.png" alt="React Logo" className='reactLogo' onClick={() => {
        window.open('https://reactjs.org', '_blank');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        }} />
      <nav style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        {topics.map(t => (
          <button
            key={t}
            onClick={() => setActive(t)}
            style={{ padding: '10px 15px', border: 'none', borderBottom: active === t ? '2px solid #000' : '2px solid transparent', background: 'none', cursor: 'pointer' }}
          >
            {t}
          </button>
        ))}
      </nav>
      <Section title={active}>
        <ActiveComp />
      </Section>
      <footer style={ { textAlign: 'center', padding: '20px',  marginTop: 20, borderRadius: 8  , fontFamily: 'sans-serif' }}>
        <p style={{ textAlign: 'center', fontSize: '0.8em', color: '#666', marginTop: 20 }}>
          © 2025 React Workshop - Micro club.
        </p>
        <p style={{ textAlign: 'center', fontSize: '0.8em', color: '#666' , marginTop: 10, marginBottom: 20, lineHeight: '1.5'}}> 
          Made with ❤ by <a href="https://github.com/aasmaa01" target="_blank" rel="noopener noreferrer">asma</a>
        </p>
         
      </footer>
    </div>
  );
}

// Rend l'application
const container = document.getElementById('root');
createRoot(container).render(<App />);
