import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import IndexPage from "../pages";
import AboutPage from "../pages/about.page";
import ContactPage from "../pages/contact.page";
import FaqPage from "../pages/faq.page";
import SigninPage from "../pages/sigin.page";
import SignupPage from "../pages/signup.page";
import VerificationPage from "../pages/verification.page";


const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexPage />
    },
    {
        path: "/signin",
        element: <SigninPage />
    },
    {
        path: "/signup",
        element: <SignupPage />
    },
    {
        path: "/faq",
        element: <FaqPage />
    },
    {
        path: "/about",
        element: <AboutPage />
    },
    {
        path: "/contact",
        element: <ContactPage />
    },
    {
        path: "/verification",
        element: <VerificationPage />
    },
]);
export const AppNavigation = () => <RouterProvider router={router} />

