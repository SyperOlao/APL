import {IMenuElementData} from "../../Interfaces/Interfaces";
import classes from "../MenuBar.module.css";
import {NavLink} from "react-router-dom";

export const MenuElement = (props: { elementData: IMenuElementData, menuState: boolean, textAnimation: string }): JSX.Element => {
    const {link, icon, text} = props.elementData;
    const menuState = props.menuState;
    const textAnimation = props.textAnimation;
    return (
        <NavLink to={link} className={`${classes.containerNavLink} ${menuState ? classes.navLink : classes.navLinkUnselected}`}>
            <div className={classes.menuElemIcon}>{icon}</div>
            <div className={`${menuState ? classes.menuElemText: classes.menuElemTextClose} ${textAnimation}`}>{text}</div>
        </NavLink>
    );
}

