import { createBrowserRouter } from "react-router";
import App from "../App";
import NotFound from "../components/NotFound";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ContactUsPage from "../pages/ContactUsPage";
import AboutUs from "../pages/AboutUs";
import SignInPage from "../pages/SignInPage";
import ViewOrders from "../pages/ViewOrders";
import ProtectedRoute from "../components/ProtectedRoute";
import ProfilePage from "../pages/ProfilePage";
import UnAuthenticatedRoute from "../components/UnAuthenticatedRoute";
import CartPage from "../pages/CartPage";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<NotFound/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:'shop',
                element:<ShopPage/>
            },
            {
                path:'Contact-us',
                element:<ContactUsPage/>
            },
            {
                path:'about-us',
                element:<AboutUs/>
            },
            {
                path:'cart-page',
                element:<CartPage/>
            },
            {
                path:'profile',
                element:(
                    <ProtectedRoute>
                        <ProfilePage/>
                    </ProtectedRoute>
                )
            },
            {
                path:'view-orders',
                element:(
                    <ProtectedRoute>
                        <ViewOrders/>
                    </ProtectedRoute>
                )
            },
            {
                path:'sign-in',
                element:(
                    <UnAuthenticatedRoute>
                        <SignInPage/>
                    </UnAuthenticatedRoute>
                )
            }
        ]
    }
])