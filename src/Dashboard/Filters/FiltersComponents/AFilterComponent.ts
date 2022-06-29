import {IFilterComponent} from "./IFilterComponent";
import {IFilterData} from "../../Interfaces/Interfaces";
import {ChangeEvent} from "react";

export abstract class AFilterComponent implements IFilterComponent {

    private readonly _filterData: IFilterData[];
    private _condition: boolean;
    private _currentValue: string;
    private _title: string;
    private _name: string;
    private _reduxOnChange: (event: string)=> void;

    public constructor(filterData: IFilterData[], name: string, condition = true, title="") {
        this._filterData = filterData;
        this._condition = condition;
        this._name = name;
        this._currentValue = this.filterData[0].value.toString();
        this._title = title;
        this._reduxOnChange = (event:string)=>{}
    }



    public getCurrentValue(): string {
        return this._currentValue;
    }

    get reduxOnChange(): (event: string) => void {
        return this._reduxOnChange;
    }
    set reduxOnChange(value: (event: string) => void) {
        this._reduxOnChange = value;
    }

    public setCurrentValue(value: string) {
        const newFilter = this._filterData.findIndex(filter => filter.value === value);
        if (newFilter !== -1) {
            this._currentValue = value;
        } else {
            console.error('Can\'t find this value in filter data');
        }
    }

    abstract render(key: number): JSX.Element;

    public get filterData(): IFilterData[] {
        return this._filterData;
    }

    get condition(): boolean {
        return this._condition;
    }

    set condition(value: boolean) {
        this._condition = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}