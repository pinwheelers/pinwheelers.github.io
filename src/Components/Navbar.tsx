import type { JSX } from "react";
import "./Navbar.scss";
import { Link } from "react-router";

interface INavButtonProps {
    children: string;
    to: string;
}

function NavButton({ children, to }: INavButtonProps): JSX.Element {
    return <Link className="navButton" to={to}>
        <span>{children}</span>
    </Link>
}

interface IDropdownProps {
    text: string;
    to: string;
    children: any[];
}

function Dropdown({ children, text, to }: IDropdownProps): JSX.Element {
    return <div className="dropdown">
        <NavButton to={to}>{text}</NavButton>
        <ul className="dropdownContent">
            {children.map(child => <li>{child}</li>)}
        </ul>
    </div>;
}

export default function NavBar(): JSX.Element {
    return <div className="navBar">
        <div className="navContainer">
            <NavButton to="/">Pinwheelers</NavButton>
            <NavButton to="/listen">Listen to it here</NavButton>
            <Dropdown text="Cast/Crew" to="/meet/cast">
                <NavButton to="/meet/cast">Meet the cast</NavButton>
                <NavButton to="/meet/crew">Meet the crew</NavButton>
            </Dropdown>
            <Dropdown text="About" to="/about">
                <NavButton to="/about">About the project</NavButton>
                <NavButton to="/about/universe">About the universe</NavButton>
            </Dropdown>
            {/* About the universe / About the project */}
        </div>
        <svg className="navExtra" id="navExtra" viewBox="0 0 80 100">
            <polygon points="0,0 80,0 0,100 " />
        </svg>
    </div>;
}
