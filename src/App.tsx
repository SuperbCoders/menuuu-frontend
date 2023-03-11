import React from 'react';
import {
    RouterProvider, Route,
    createBrowserRouter, createRoutesFromElements,
} from "react-router-dom";
import {Provider} from 'react-redux';
import UserMenu from "./pages/UserMenu";
import {
    PARAM_ID,
    PARAM_RESTAURANT,
    ROUTE_ABOUT, ROUTE_ADD_CATEGORY, ROUTE_AUTH, ROUTE_CATEGORIES,
    ROUTE_COURSES,
    ROUTE_MENU, ROUTE_PLANS, ROUTE_PROFILE,
    ROUTE_ROOT,
    ROUTE_USER
} from "./constants/routes";
import UserAbout from "./pages/UserAbout";
import UserCourse from "./pages/UserCourse";
import Plans from "./pages/Plans";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";
import AddCategory from "./pages/AddCategory";
import Auth from "./pages/Auth";
import Category from "./pages/Category";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={ROUTE_ROOT}>
            <Route path={ROUTE_AUTH} element={<Auth/>}/>
            <Route path={ROUTE_ROOT} element={<Main/>}/>
            <Route path={ROUTE_PROFILE} element={<Profile/>}/>
            <Route path={ROUTE_MENU} element={<Menu/>}/>
            <Route path={ROUTE_ADD_CATEGORY} element={<AddCategory/>}/>
            <Route path={`${ROUTE_CATEGORIES}/${PARAM_ID}`} element={<Category/>}>
                <Route path={ROUTE_MENU} element={<Menu/>}/>
            </Route>
            <Route path={ROUTE_PLANS} element={<Plans/>}/>
            <Route path={`${ROUTE_USER}/${PARAM_RESTAURANT}`}>
                <Route path={ROUTE_MENU} element={<UserMenu/>}/>
                <Route path={ROUTE_ABOUT} element={<UserAbout/>}/>
                <Route path={ROUTE_COURSES}>
                    <Route path={PARAM_ID} element={<UserCourse/>}/>
                </Route>
            </Route>
        </Route>
    )
);

function App() {
    return (
        <div className="app">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
