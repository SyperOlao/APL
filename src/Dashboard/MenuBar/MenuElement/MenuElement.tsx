import {IMenuElementData} from "../../Interfaces/Interfaces";
import classes from "../MenuBar.module.css";

export const MenuElement = (prop: {elementData :IMenuElementData}): JSX.Element =>{
    const {icon, text} = prop.elementData;
    return(
        <li className={classes.menuElem}>
            <div className={classes.menuElemIcon}>{icon}</div> <div className={classes.menuElemText}>{text}</div>
        </li>
    );
}

