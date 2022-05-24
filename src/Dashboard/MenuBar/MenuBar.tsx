import classes from "./MenuBar.module.css";
import {MenuElement} from "./MenuElement/MenuElement";
import {MenuTitle} from "./MenuTitle/MenuTitle";

export const MenuBar = (): JSX.Element => {
    const data = [{
        icon: 'ic', text: 'text',
    }, {
        icon: 'ic1', text: 'text1',
    }]
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <MenuTitle/>
            </div>
            <ul className={classes.menuElemContainer}>
                {data.map(menuElement => <MenuElement elementData={menuElement}/>)}
            </ul>
        </div>
    );
}