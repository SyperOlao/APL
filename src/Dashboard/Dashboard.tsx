import "./styles/styles.css";
import {Header} from "./Header/Header";
import {Content} from "./Content/Content";
import {MenuBar} from "./MenuBar/MenuBar";


export const Dashboard = (): JSX.Element => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className={"menuBar"}>
                    <MenuBar/>
                </div>
                <div className="main-content">
                    <div className="header">
                        <Header title='Title title'/>
                    </div>
                    <div className="content">
                        <Content/>
                    </div>
                </div>
            </div>
        </div>
    );
}