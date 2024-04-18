import React from "react";
import wallpaper from "../images/Minimalist.png";

export const About = () => (
  <div className="container">
    <img src={wallpaper} alt={"wallpaper"} />
    <div className="about-wrapper">
      <h1>Приложение Заметки</h1>
      <p className="lead">
        Версия приложения <strong>1.0.44</strong>
      </p>
    </div>
  </div>
);
