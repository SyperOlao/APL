import {IMenuElementData} from "../../Interfaces/Interfaces";
import classes from "../MenuBar.module.css";
import {NavLink} from "react-router-dom";
export const MenuElement = (prop: { elementData: IMenuElementData }): JSX.Element => {
    const {link, icon, text} = prop.elementData;
    return (
        <li className={classes.menuElem}>
            <NavLink to={link} className={isActive =>
                classes.navLink + (!isActive ? classes.navLinkUnselected : "")}>
                <div className={classes.menuElemIcon}>{icon}</div>
                <div className={classes.menuElemText}>{text}</div>
            </NavLink>
        </li>
    );
}

