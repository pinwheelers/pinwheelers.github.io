import type { JSX } from "react";
import "./Profile.scss"

interface IProfileProps {
    image: string;
    children: any;
    name: string;
}

export default function Profile({ children, image, name }: IProfileProps): JSX.Element {
    return <div className="profileContainer">
        <img src={image} alt={`A picture of ${name}`} className="profileImageFormat" />
        <div className="profileText">
            <h2>{name}</h2>
            {children}
        </div>
    </div>
}
