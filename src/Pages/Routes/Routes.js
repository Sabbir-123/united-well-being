import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Error from "../Error/Error";
import Home from "../Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default router