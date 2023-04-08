import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../Routes/Contact";
import Detail from "../Routes/Detail";
import Favs from "../Routes/Favs";
import Home, { loaderData }  from "../Routes/Home";
import NotFound from "../Routes/NotFound";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {
                index: true,
                element: <Home/>,
                loader: loaderData,
            },
            {
                path: '/contact',
                element: <Contact/>,
            },
            {
                path: '/favs',
                element: <Favs/>,
            },
            {
                path: '/details/:id',
                element: <Detail/>,
                loader: loaderData,
            }
        ]
    },
])