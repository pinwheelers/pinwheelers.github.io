import type { JSX } from 'react';
import './App.scss';
import NavBar from './Components/Navbar';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import HomePage from './Pages/HomePage';
import ListenPage from './Pages/ListenPage';
import MeetCrewPage from './Pages/MeetCrewPage';
import MeetCastPage from './Pages/MeetCastPage';
import AboutPage from './Pages/AboutPage';
import AboutUniversePage from './Pages/AboutUniversePage';
    
function App() {

    const router = createBrowserRouter([
        {
            element: <AppGrid />,
            children: [
                { index: true, Component: HomePage },
                {
                    path: "listen",
                    Component: ListenPage,
                },
                {
                    path: "meet",
                    children: [
                        { path: "crew", Component: MeetCrewPage },
                        { path: "cast", Component: MeetCastPage },
                    ]
                },
                {
                    path: "about",
                    children: [
                        { index: true, Component: AboutPage },
                        { path: "universe", Component: AboutUniversePage },
                    ]
                },
            ]
        }]);

    return <RouterProvider router={router} />;
}

function AppGrid(): JSX.Element {
    return <div className="appMain">
        <NavBar />
        <Outlet />
    </div>;
}

export default App;
