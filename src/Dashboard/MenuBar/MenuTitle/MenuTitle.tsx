import classes from "../MenuBar.module.css";
import {MouseEventHandler} from "react";

export const MenuTitle = (props: {onClick: MouseEventHandler<HTMLDivElement>, title: string}): JSX.Element => {
    const {onClick, title} = props;
    return (
        <div onClick={onClick} className={classes.text}>
            {title}
        </div>
    );
}