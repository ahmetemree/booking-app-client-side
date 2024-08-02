import HomePage from "./routes/homePage/homePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import { createTheme, MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { Notifications } from "@mantine/notifications";
import { AuthContextProvider } from "./context/AuthContext";
import {Layout, RequireAuth} from "./routes/layout/layout";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
const theme = createTheme({
  /** Your theme override here */
});
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },
    {
      path:"/",
      element:<RequireAuth/>,
      children:[
        {
          path:"/profile",
          element:<ProfilePage/>,
        },
        {
          path:"/profile/update",
          element:<ProfileUpdatePage/>,
        },
      ],
    },
  ]);

  

  return (
    <AuthContextProvider>
    <MantineProvider theme={theme}>
      <Notifications />
    <RouterProvider router={router}/>
    </MantineProvider>
    </AuthContextProvider>
  );
}

export default App;
