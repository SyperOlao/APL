import {IFilterData} from "../../../Interfaces/Interfaces";
import {AFilterComponent} from "../AFilterComponent";
import React, {ChangeEvent, Dispatch, SetStateAction, useState} from "react";

export class DropDownList extends AFilterComponent {

    private onChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        this.setCurrentValue(event.target.value);
    }

    public setOnChange(func: (event: ChangeEvent<HTMLSelectElement>) => void) {
        this.onChange = func;
    }

    public setState = (set: Dispatch<SetStateAction<string>>) => {
        this.onChange = (event: ChangeEvent<HTMLSelectElement>) => {
            set(event.target.value);
        }
    }

    public render(): JSX.Element {
        return <DropDownListComponent data={this.filterData} currentValue={this.getCurrentValue()}
                                      setCurrentValue={this.setCurrentValue.bind(this)}
                                      onChange={this.onChange.bind(this)} condition={this.condition}
                                      title={this.title}/>
    }

}


const DropDownListComponent = (props: {
    data: IFilterData[],
    currentValue: string,
    title: string,
    condition: boolean,
    setCurrentValue: (value: string) => void,
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}): JSX.Element => {
    const {data, currentValue, title, condition, setCurrentValue, onChange} = props;
    const [a, sA] = useState('b1');
    setCurrentValue(a);
    const onChange1 = (event: ChangeEvent<HTMLSelectElement>): void => {
        onChange(event);
        sA(event.target.value);
    }
    return (
        <>
            {condition && <div>
                <label>{title}</label>
                <select onChange={onChange1} defaultValue={currentValue}>
                    {data.map((option, i) =>
                        <option key={`${option.value}_${i}`} value={option.value}>
                            {option.label}
                        </option>
                    )}
                </select>

            </div>}
        </>);
}