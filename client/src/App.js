import './App.css';
import Homepage from './Components/Pages/Homepage';
import Login from './Components/Pages/Login';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Register from './Components/Pages/Register';
import Newposts from './Components/Pages/Newposts';
import Post from './Components/Pages/Post';
import Individualpost from './Components/Pages/Individualpost';
import Edit from './Components/Pages/Edit';


const router = createBrowserRouter(
  [{
      path:"/",
      element: <Homepage/>,
    },
    {
      path:"/login",
      element: <Login />,
    },
    {
      path:"/register",
      element: <Register />,
    },
    {
      path:"/newposts",
      element: <Newposts />,
    },
    {
      path:"/post",
      element: <Post />,
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

