import { createBrowserRouter } from "react-router-dom";
import app from "../firebase/firebase.config";
import Main from "../LayOut/Main";
import Home from "../page/Home";

export const router = createBrowserRouter([
{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        }
    ]
}
]);