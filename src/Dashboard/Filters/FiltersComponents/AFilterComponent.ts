import {IFilterComponent} from "./IFilterComponent";
import {IFilterData} from "../../Interfaces/Interfaces";

export abstract class AFilterComponent implements IFilterComponent {
    private readonly _filterData: IFilterData[];
    private _condition: boolean;
    private _currentValue: string;

    public constructor(filterData: IFilterData[], condition = true) {
        this._filterData = filterData;
        this._condition = condition;
        this._currentValue = this.filterData[0].value.toString();

    }

    public getCurrentValue(): string {
        return this._currentValue;
    }

    public setCurrentValue(value: string) {
        this._currentValue = value;
    }

    abstract render(): JSX.Element;

    public get filterData(): IFilterData[] {
        return this._filterData;
    }

    get condition(): boolean {
        return this._condition;
    }

    set condition(value: boolean) {
        this._condition = value;
    }
}