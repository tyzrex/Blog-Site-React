import './App.css';
import Homepage from './Components/Pages/Homepage';
import Login from './Components/Pages/Login';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Register from './Components/Pages/Register';
import Newposts from './Components/Pages/Newposts';
import Post from './Components/Pages/Post';
import Individualpost from './Components/Pages/Individualpost';
import Edit from './Components/Pages/Edit';
import Privateroute from './Components/PrivateRoute/Privateroute';
import LoggedRoute from './Components/PrivateRoute/LoggedRoute';


const router = createBrowserRouter(
  [{
      path:"/",
      element: <Homepage/>,
    },
    {
      path:"/login",
      element: <LoggedRoute><Login/></LoggedRoute>,
    },
    {
      path:"/register",
      element: 
        <LoggedRoute><Register/></LoggedRoute>
      ,
    },
    {
      path:"/newposts",
      element: <Newposts />,
    },
    {
      path:"/post",
      element: <Privateroute>
        <Post />
      </Privateroute>,
    },
    {
      path:"individualpost/:id",
      element: <Individualpost />,
    },
    {
      path:"post/edit/",
      element:<Edit />
    }
  ]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

