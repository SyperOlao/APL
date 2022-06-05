import {IFilterData} from "../../../Interfaces/Interfaces";
import {AFilterComponent} from "../AFilterComponent";
import React, {ChangeEvent} from "react";

export class DropDownList extends AFilterComponent {
    private _currentValue = this.filterData[0].value.toString();

    public getValue(): string {
        return this._currentValue;
    }

    private onChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        this._currentValue = event.target.value;
    }

    public render(): JSX.Element {
        return <DropDownListComponent data={this.filterData} onChange={this.onChange}/>
    }

}

const DropDownListComponent = (props: { data: IFilterData[], onChange: (event: ChangeEvent<HTMLSelectElement>) => void }): JSX.Element => {
    const options = props.data;
    const onChange = props.onChange;
    return (
        <div>
            <label>language</label>
            <select onChange={onChange}>
                {options.map((option, i) =>
                    <option key={`${option.value}_${i}`} value={option.value}>{option.label}</option>
                )}

            </select>
        </div>);
}