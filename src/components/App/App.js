import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import { ToastProvider } from '../ToastShelf/ToastContext';

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  );
}

export default App;
