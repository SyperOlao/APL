import {IFilterComponent} from "./IFilterComponent";
import {IFilterData} from "../../Interfaces/Interfaces";

export abstract class AFilterComponent implements IFilterComponent {

    private readonly _filterData: IFilterData[];
    private _condition: boolean;
    private _currentValue: string | number | undefined;
    private _title: string;
    protected _reduxOnChange: any;

    public constructor(filterData: IFilterData[], currentValue: string | number | undefined, reduxOnChange: any, condition = true, title = "") {
        this._filterData = filterData;
        this._condition = condition;
        this._currentValue = currentValue;
        this._title = title;
        this._reduxOnChange = reduxOnChange;
    }


    public getCurrentValue(): string | number | undefined {
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

}