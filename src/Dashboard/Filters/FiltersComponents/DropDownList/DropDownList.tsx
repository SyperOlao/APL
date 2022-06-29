import {IFilterData} from "../../../Interfaces/Interfaces";
import {AFilterComponent} from "../AFilterComponent";
import React, {ChangeEvent} from "react";

export class DropDownList extends AFilterComponent {

    private onChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        this.setCurrentValue(event.target.value);
    }

    public render(key=0): JSX.Element {
        return <DropDownListComponent data={this.filterData} key={key} currentValue={this.getCurrentValue()}
                                      onChange={this.onChange.bind(this)} condition={this.condition}
                                      title={this.title}/>
    }

}

const DropDownListComponent = (props: {
    data: IFilterData[],
    currentValue: string,
    title: string,
    condition: boolean,
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}): JSX.Element => {
    const {data, currentValue, title, condition, onChange} = props;
    return (
        <>
            {condition && <div>
                <label>{title}</label>
                <select onChange={onChange} defaultValue={currentValue}>
                    {data.map((option, i) =>
                        <option key={`${option.value}_${i}`} value={option.value}>
                            {option.label}
                        </option>
                    )}
                </select>

            </div>}
        </>);
}