import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';

ReactDOM.render(
   <Suspense>
      <App />
   </Suspense>,
   document.getElementById('root')
);
