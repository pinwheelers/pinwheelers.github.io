import type { JSX } from "react";
import "./Footer.scss";
import logo from "../assets/pinwheelerlogoletterless.png";

export default function Footer(): JSX.Element {
    const year = new Date().getFullYear();
    return <div className="footerBar">
        <div className="footerContainer">
            <img src={logo} alt="Pinwheeler Logo" className="logoFormat" />
            <div>
                <p> Pinwheeler@gmail.com </p>
                <p> ###-###-#### </p>
                <p> copyright © {year} </p>
                {/* email */}
                {/* Phone number */}
                {/* "copyright" */}
            </div>
        </div>
    </div>
}