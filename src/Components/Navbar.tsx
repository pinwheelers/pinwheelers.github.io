import type { JSX } from "react";
import "./Navbar.scss";
import { Link } from "react-router";

export interface INaveButtonProps {
    children: string;
    to: string;
}

export function NavButton({ children, to }: INaveButtonProps): JSX.Element {
    return <Link className="navButton" to={to}>
        <span>{children}</span>
    </Link>
}

export default function NavBar(): JSX.Element {
    return <div className="navBar">
        <div className="navContainer">
            <NavButton to="/">Pinwheelers</NavButton>
            <NavButton to="/listen">Listen to it here</NavButton>
            <NavButton to="/meet/crew">Meet the crew</NavButton>
            {/* Meet the crew / Meet the cast */ }
            <NavButton to="/about">About</NavButton>
            {/* About the universe / About the project */}
        </div>
        <svg className="navExtra" id="navExtra" viewBox="0 0 80 100">
            <polygon points="0,0 80,0 0,100 " />
        </svg>
    </div>
}
