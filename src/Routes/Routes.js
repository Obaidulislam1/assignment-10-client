import { createBrowserRouter } from "react-router-dom";
import app from "../firebase/firebase.config";
import Main from "../LayOut/Main";
import Blog from "../page/Blog";
import Category from "../page/Category";
import Courses from "../page/Courses";
import ErrorPage from "../page/ErrorPage";
import Home from "../page/Home";
import Login from "../page/Login";
import Registation from "../page/Registation";
import PrivateRoute from "./PrivateRoute";

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
            element: <PrivateRoute><Courses></Courses></PrivateRoute>,
            loader: () => fetch('https://assignment-10-server-obaidulislam1.vercel.app/courses')
        },
        {
            path: '/register',
            element: <Registation></Registation>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/category/:id',
            element: <Category></Category>,
            loader: ({params}) => fetch(`https://assignment-10-server-obaidulislam1.vercel.app/category/${params.id}`)
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '*',
            element: <ErrorPage></ErrorPage>
        }

    ]
}
]);