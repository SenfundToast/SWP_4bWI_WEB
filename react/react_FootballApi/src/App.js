import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MatchTable from './components/MatchTable';
import TeamTable from './components/TeamTable';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MatchTable/>
  },

  {
    path: "/teaminfos",
    element: <TeamTable/>
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
