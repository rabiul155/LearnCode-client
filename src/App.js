
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Cources from './component/Cources/Cources';
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import Register from './component/Register/Register';
import Blog from './component/Blog/Blog';
import Main from './layout/Main';



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/cources',
          loader: () => fetch('http://localhost:5000/cources'),
          element: <Cources></Cources>,

        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }

      ]
    }
  ])


  return (


    <div className="App">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
