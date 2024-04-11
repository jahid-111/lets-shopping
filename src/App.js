
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Root from './root/Root';
import Main from './root/Main';






const router  = createBrowserRouter ( [
  { path :  "/", element : <Root></Root>, 
    children :  [
      {path : "/", element : <Main></Main>},
      {path :  "home", element : <Main></Main>}
    ]
  }
      
] )




function App() {
  return (
    <div className=" md:px-24 mx-auto   ">
        <RouterProvider router={ router}></RouterProvider>
    </div>
  );
}

export default App;
