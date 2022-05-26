import classes from "./MenuBar.module.css";
import {MenuElement} from "./MenuElement/MenuElement";
import {MenuTitle} from "./MenuTitle/MenuTitle";
import {IMenuElementData} from "../Interfaces/Interfaces";
import {AssessmentOutlined, ExitToApp, StreetviewTwoTone} from "@material-ui/icons";
import {useState} from "react";

const data: IMenuElementData[] = [
    {link: "#", icon: <AssessmentOutlined/>, text: 'text',},
    {link: "#", icon: <StreetviewTwoTone/>, text: 'text1',},
];
const exitToApplication: IMenuElementData =
    {link: "#", icon: <ExitToApp/>, text: 'Выход',};

export const MenuBar = (): JSX.Element => {
    const [menuState, setMenuState] = useState(false);
    const [animationClasses, setAnimationClasses] = useState("");
    const [animationClassesText, setAnimationClassesText] = useState("");

    const onClickOnMenu = (): void => {
        setMenuState(!menuState);
        setAnimationClasses(menuState ? classes.animationSlideIn : classes.animationSlideOut);
        setAnimationClassesText(menuState ? classes.animationSlideInText : classes.animationSlideOutText);
    }
    return (
        <div className={`${classes.container} 
            ${menuState ? classes.mainContainer : classes.mainContainerActive}
            ${animationClasses}`}>
            <div className={classes.mainMenu}>
                <div className={classes.title}>
                    <MenuTitle onClick={onClickOnMenu} title={"APL"}/>
                </div>
                <nav className={classes.menuElemContainer}>
                    {data.map((menuElement: IMenuElementData, i: number) =>
                        <MenuElement key={`${menuElement.text}_${i}`}
                                     elementData={menuElement}
                                     menuState={menuState}
                                     textAnimation={animationClassesText}/>)}

                </nav>
            </div>
            <div className={classes.exitMenu}>
                <nav className={classes.exitToApp}>
                    <MenuElement elementData={exitToApplication}
                                 menuState={menuState}
                                 textAnimation={animationClassesText}/>
                </nav>
            </div>

        </div>
    );
}