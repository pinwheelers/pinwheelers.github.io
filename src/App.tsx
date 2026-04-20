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
import Footer from './Components/Footer';

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
                        { path: "univers", Component: AboutUniversePage },
                    ]
                },
            ]
        }]);

    return <RouterProvider router={router} />;
}

function AppGrid(): JSX.Element {
    return <div className="appMain">
        <NavBar />
        <div className="appContent">  <Outlet /> </div>
        <Footer />
    </div>;
}

export default App;
