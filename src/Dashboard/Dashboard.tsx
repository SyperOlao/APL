import "./styles/styles.css";
import {Header} from "./Header/Header";
import {Content} from "./Content/Content";
import {MenuBar} from "./MenuBar/MenuBar";
import {Filters} from "./Filters/Filters";

export const Dashboard = (): JSX.Element =>{
  return (
      <div className={"container"}>
          <Header/>
          <MenuBar/>
          <Filters/>
          <Content/>
      </div>
  );
}