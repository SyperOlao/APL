import {IFilterData} from "../../../Interfaces/Interfaces";
import {AFilterComponent} from "../AFilterComponent";

export class DropDownList extends AFilterComponent{
    getValue(): string {
        return this.filterData[0].value.toString();
    }

    render(): JSX.Element {
        return <DropDownListComponent data={this.filterData}/>
    }

}

const DropDownListComponent = (props: {data: IFilterData[]}): JSX.Element=>{
    let value = props.data
    return (
        <div>
            {value[0].value}
        </div>);
}