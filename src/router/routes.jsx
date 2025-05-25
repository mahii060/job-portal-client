import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/Home/Home.jsx";
import Register from "../pages/Register/Register.jsx";
import SignIn from "../pages/SignIn/SignIn.jsx";
import JobDetails from "../pages/Home/JobDetails.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import JobApply from "../pages/JobApply/JobApply.jsx";
import MyApplications from "../pages/MyApplications/MyApplications.jsx";
import AddJob from "../pages/AddJob/AddJob.jsx";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <h2>Route not found</h2>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/jobs/:id',
                element:
                    <PrivateRoute>
                        <JobDetails />
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element:
                    <PrivateRoute>
                        <JobApply />
                    </PrivateRoute>,
            },
            {
                path: '/myApplications',
                element:
                    <PrivateRoute>
                        <MyApplications />
                    </PrivateRoute>,
            },
            {
                path: '/addJob',
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: '/myPostedJobs',
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>
            },
            {
                path: '/signIn',
                element: <SignIn />
            },
        ]
    },
]);