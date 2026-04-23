import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './src/App.jsx';
import './src/index.css';

console.log('Arcade Nova: Entry point triggered from root');

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
} else {
  console.error('Fatal Error: root element not found');
}
