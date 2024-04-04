import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Web1 from './components/web1';
import Web2 from './components/web2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Web1/>
  },

  {
    path: "web2",
    element: <Web2/>
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
