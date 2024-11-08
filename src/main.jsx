import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import './index.css'
import App from './App.jsx'
import { persistor, store } from './Redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<div className='w-full text-center'>Loading.....</div>}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </Suspense>
  </StrictMode>
)
