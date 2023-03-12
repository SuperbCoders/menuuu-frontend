import React from 'react';
import {
    RouterProvider, Route,
    createBrowserRouter, createRoutesFromElements,
} from "react-router-dom";
import {
    PARAM_ID,
    PARAM_RESTAURANT,
    ROUTE_ABOUT, ROUTE_ADD_CATEGORY, ROUTE_AUTH, ROUTE_CATEGORIES,
    ROUTE_COURSES,
    ROUTE_MENU, ROUTE_PLANS, ROUTE_PROFILE,
    ROUTE_ROOT,
    ROUTE_PUBLIC,
} from "./constants/routes";
import PublicMenu from "./pages/public/Menu";
import PublicAbout from "./pages/public/About";
import PublicCourse from "./pages/public/Course";
import Plans from "./pages/Plans";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";
import AddCategory from "./pages/AddCategory";
import Auth from "./pages/Auth";
import Category from "./pages/Category";
import './i18n';

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
            <Route path={`${ROUTE_PUBLIC}/${PARAM_RESTAURANT}`}>
                <Route path={ROUTE_MENU} element={<PublicMenu/>}/>
                <Route path={ROUTE_ABOUT} element={<PublicAbout/>}/>
                <Route path={ROUTE_COURSES}>
                    <Route path={PARAM_ID} element={<PublicCourse/>}/>
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
