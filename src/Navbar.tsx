import "./Navbar.scss"

export interface INaveButtonProps {
    children?: any;
}

export function NavButton({ children }: INaveButtonProps) {
    return <button className="navButton">
        {children }
    </button>
}

export default function NavBar() {
    return <div className="navBar">
        <div className="navContainer">
            <NavButton>Pinwheelers</NavButton>
            <NavButton>Listen to it here</NavButton>
            <NavButton>Meet the crew</NavButton>
            {/* Meet the crew / Meet the cast */ }
            <NavButton>About</NavButton>
            {/* About the universe / About the project */}
        </div>
        <svg className="navExtra" id="navExtra" viewBox="0 0 80 100">
            <polygon points="0,0 80,0 0,100 " />
        </svg>
    </div>
}
