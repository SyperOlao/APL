import classes from "./MenuBar.module.css";
import {MenuElement} from "./MenuElement/MenuElement";
import {MenuTitle} from "./MenuTitle/MenuTitle";
import {IMenuElementData} from "../Interfaces/Interfaces";
import {AssessmentOutlined, ExitToApp, StreetviewTwoTone} from "@material-ui/icons";

export const MenuBar = (): JSX.Element => {
    const data: IMenuElementData[] = [
        {link: "#", icon: <AssessmentOutlined/>, text: 'text',},
        {link: "#", icon: <StreetviewTwoTone/>, text: 'text1',},
    ];
    const exitToApplication: IMenuElementData =
        {link: "#", icon: <ExitToApp/>, text: 'Выход',};
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                <MenuTitle/>
            </div>
            <nav className={classes.menuElemContainer}>
                {data.map((menuElement: IMenuElementData, i: number) =>
                    <MenuElement key={`${menuElement.text} +${i}`}
                                 elementData={menuElement}/>)}
            </nav>
            <nav className={`${classes.menuElemContainer} ${classes.exitToApp}`}>
                <MenuElement elementData={exitToApplication}/>
            </nav>
        </div>
    );
}