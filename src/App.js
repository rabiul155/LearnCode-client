
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Cources from './component/Cources/Cources';
import Home from './component/Home/Home';
import LogIn from './component/LogIn/LogIn';
import Register from './component/Register/Register';
import Main from './layout/Main';
import CourceDetails from './component/CourceDetails/CourceDetails';
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
          path: '/cources/:id',
          loader: ({ params }) => {
            console.log(params);
            return fetch(`https://63-assignment-server.vercel.app/cources?courseId=${params?.id}`)
          },
          element: <Cources></Cources>,


        },

        {
          path: '/cource/:id',
          loader: ({ params }) => fetch(`https://63-assignment-server.vercel.app/cource/${params.id}`),
          element: <Private><CourceDetails></CourceDetails></Private>

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


