// filepath: /c:/Users/crist/OneDrive/Escritorio/dev/web/dacarsAstro/src/components/NavBar.tsx
import React from "react";
import "./NavBar.css";
import { Image } from "astro:assets";

export default function NavBar(): React.JSX.Element {
  return (
    <nav id="navbar">
      <figure>
        {/* <img
          src="https://scontent.fbaq6-1.fna.fbcdn.net/v/t39.30808-6/302144409_503356961796708_4286221386902598954_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFaGkBLduIZkeMobBMAQH27WC7-DvV_OtZYLv4O9X861iymG4MhxZWSm__U9mW0X-Q5byJZi4bn2lRbbJP0-3rR&_nc_ohc=8jUHNB7Al8oQ7kNvgG0XBXx&_nc_zt=23&_nc_ht=scontent.fbaq6-1.fna&_nc_gid=App5v_YrWVOOkdWI_6VUh1e&oh=00_AYCDz0OwLbfUwxsAB2cNID_yN-FL9KHUNA_Ha1cexXnw9g&oe=678675E1"
          alt=""
        /> */}
        Logo
      </figure>
      <ul>
        <li>Inicio</li>
        <li>Sobre nosotros</li>
        <li>Contactanos</li>
      </ul>
      <ul>
        <li>Pide ahora!</li>
      </ul>
    </nav>
  );
}
