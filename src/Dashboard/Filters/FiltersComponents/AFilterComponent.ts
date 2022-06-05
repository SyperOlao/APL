import {IFilterComponent} from "./IFilterComponent";
import {IFilterData} from "../../Interfaces/Interfaces";

export abstract class  AFilterComponent implements IFilterComponent{
    private readonly _filterData: IFilterData[];
    private _condition: boolean;
    public constructor(filterData: IFilterData[], condition = true) {
        this._filterData = filterData;
        this._condition = condition;
    }

    abstract getValue(): string;

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