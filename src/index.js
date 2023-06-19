// == Import : npm
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
// == Import : local
// Composants
import App from 'src/components/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
