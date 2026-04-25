import type { JSX } from "react";
import "./Footer.scss";
import logo from "../assets/pinwheelerlogoletterless.png";

export default function Footer(): JSX.Element {
    const year = new Date().getFullYear();
    return <div className="footerBar">
        <div className="footerContainer">
            <img src={logo} alt="Pinwheeler Logo" className="logoFormat" />
            <div>
                <p> kenn.erason@gmail.com </p>
                <p> Copyright © {year} </p>
            </div>
        </div>
    </div>
}