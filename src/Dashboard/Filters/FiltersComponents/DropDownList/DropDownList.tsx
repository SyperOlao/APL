import {IFilterData} from "../../../Interfaces/Interfaces";
import {AFilterComponent} from "../AFilterComponent";
import React, {ChangeEvent} from "react";

export class DropDownList extends AFilterComponent {

    private onChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        this.setCurrentValue(event.target.value);
    }

    public render(): JSX.Element {
        return <DropDownListComponent data={this.filterData} currentValue={this.getCurrentValue()}
                                      onChange={this.onChange} condition={this.condition}/>
    }

}


const DropDownListComponent = (props: {
    data: IFilterData[],
    currentValue: string,
    condition: boolean,
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}): JSX.Element => {
    const {data, onChange, condition, currentValue} = props;


    return (
        <>
            {condition && <div>
                <label>language</label>
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