import {IFilterData} from "../Interfaces/Interfaces";

interface IFiltersData {
    filterData: IFilterData[],
    filterData1: IFilterData[],
}

export const filtersData :IFiltersData = {
    filterData: [
        {label: 'a1', value: 'b1'},
        {label: 'a2', value: 'b2'},
        {label: 'a3', value: 'b3'},
        {label: 'a4', value: 'b4'},
    ],
    filterData1:[
        {label: 'k1', value: 'r1'},
        {label: 'k2', value: 'r2'},
        {label: 'k3', value: 'r3'},
        {label: 'k4', value: 'r4'},
    ],
}