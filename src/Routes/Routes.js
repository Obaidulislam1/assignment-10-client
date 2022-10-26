import { createBrowserRouter } from "react-router-dom";
import app from "../firebase/firebase.config";
import Main from "../LayOut/Main";
import Courses from "../page/Courses";
import Home from "../page/Home";
import Login from "../page/Login";
import Registation from "../page/Registation";

export const router = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('https://assignment-10-server-obaidulislam1.vercel.app/students')
        },
        {
            path: '/courses',
            element: <Courses></Courses>,
            loader: () => fetch('https://assignment-10-server-obaidulislam1.vercel.app/courses')
        },
        {
            path: '/register',
            element: <Registation></Registation>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
    ]
}
]);