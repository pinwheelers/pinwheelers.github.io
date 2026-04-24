import type { JSX } from "react";
import "./MeetCastPage.scss";
import Profile from "../Components/Profile"
import Tomallin from "../assets/Tomallin.png";
import Juen from "../assets/Juen.png"
import Keez from "../assets/Keez.png"
import Alyx from "../assets/Alyx.png"
import Duunba from "../assets/Duunba.png"
import Sam from "../assets/Sam.png"

export default function MeetCastPage(): JSX.Element {
    return <div className = "castContainer"> 
    <Profile image={Tomallin} name={"Gen"}> bottom text </Profile>
    <Profile image={Juen} name={"Ander"}> bottom text <a href="SoundCloud">https://on.soundcloud.com/aZ3vGIJCrsaUF594df</a></Profile>
    <Profile image={Keez} name={"Keez"}> bottom text </Profile>
    <Profile image={Alyx} name={"Alyx"}> bottom text </Profile>
    <Profile image={Duunba} name={"Duunba"}> bottom text </Profile>
    <Profile image={Sam} name={"Sam"}> bottom text </Profile>
    </div>

}