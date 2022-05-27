import "../styles/styles.css";
import {Filters} from "../Filters/Filters";

export const Header = (props: { title: string }): JSX.Element => {
    const title = props.title;
    return (
        <header className="header__container">
            <div className="header__title">
                {title.toUpperCase()}
            </div>
            <div className="header__filter">
                <Filters/>
            </div>
        </header>
    );
}

