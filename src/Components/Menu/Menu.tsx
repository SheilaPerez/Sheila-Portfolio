import { useRef, useState } from "react";
import './Menu.css';
import { CgGirl } from "react-icons/cg";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";

const Menu = () => {

    return (
        <div className="menuContent">
            <a href="#aboutme" className="link"><CgGirl color={"hsl(0, 4%, 21%)"} /> About Me</a>
            <a href="#work" className="link"><AiOutlineFundProjectionScreen color={"hsl(0, 4%, 21%)"}/>Work</a>
            <a href="#contact" className="link"><BiHeart color={"hsl(0, 4%, 21%)"}/>Contact me!</a>
        </div>
    )
};

export default Menu;