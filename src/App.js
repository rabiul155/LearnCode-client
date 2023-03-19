
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Cources from './component/Cources/Cources';
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import Register from './component/Register/Register';
import Blog from './component/Blog/Blog';
import Main from './layout/Main';
import CourceDetails from './component/CourceDetails/CourceDetails';
import Premium from './component/Premium/Premium';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Private from './component/Private/Private';
import FAQ from './component/FAQ/FAQ';
import Enrolled from './component/Enrolled/Enrolled';



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage></ErrorPage>,
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

          element: <Cources></Cources>,

        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/cource/:id',
          loader: ({ params }) => fetch(`http://localhost:5000/cource/${params.id}`),
          element: <CourceDetails></CourceDetails>

        },
        {
          path: '/enrolled',
          element: <Private><Enrolled></Enrolled></Private>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
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


