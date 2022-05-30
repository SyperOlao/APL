import {IFilterComponent} from "./IFilterComponent";
import {IFilterData} from "../../Interfaces/Interfaces";

export abstract class  AFilterComponent implements IFilterComponent{
    private readonly _filterData: IFilterData[];
    public constructor(filterData: IFilterData[]) {
        this._filterData = filterData;
    }

    abstract getValue(): string;

    abstract render(): JSX.Element;

    public get filterData(): IFilterData[] {
        return this._filterData;
    }

}