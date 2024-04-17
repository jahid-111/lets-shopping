
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Root from './root/Root';
import Main from './root/Main';
import Order from './components/Order';
import { createContext } from 'react';
// import data from "./Utilities/data";




export const DataContext = createContext('pass_context')

const router  = createBrowserRouter ( [
  { path :  "/", element : <Root></Root>, 
    children :  [
      {path : "/",
        loader : async () => {
            return fetch ("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
        }, element : <Main></Main>},
      {path : "home",
        loader : async () => {
            return fetch ("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
        }, element : <Main></Main>},
          
      {path : "cart", loader : async () => {
        return fetch ("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json")
        }, element : <Order></Order>}




    ]
  }
      
] )




function App() {
  return (
    <div className=" md:px-24 mx-auto">

      <DataContext.Provider value='Contex-loaded'>
          <RouterProvider router={ router}></RouterProvider>
      </DataContext.Provider>
    </div>
  );
}

export default App;
