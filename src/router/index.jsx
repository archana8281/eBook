import Home from "../pages/home";
import Login from "../pages/login";
import Signup from "../pages/signup";

const ROUTER = [
    {
        url: "/",
        component: Home
    },
    {
        url:"/login",
        component:Login
    },
    {
        url:"/signup",
        component: Signup 
    }

]
export { ROUTER};