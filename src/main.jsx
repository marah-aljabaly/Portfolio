import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../src/translation/i18n.js';
import { Provider } from 'react-redux';
import  {store}  from '../src/slice/store.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
