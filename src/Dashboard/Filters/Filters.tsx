import {Sort} from '@material-ui/icons';
import {ChangeEvent, useEffect, useState} from "react";
import {DropDownList} from "./FiltersComponents/DropDownList/DropDownList";
import {IFilterData} from "../Interfaces/Interfaces";

const filterData: IFilterData[] = [
    {label: 'a1', value: 'b1'},
    {label: 'a2', value: 'b2'},
    {label: 'a3', value: 'b3'},
];

export const Filters = (): JSX.Element => {
    const [showFilter, setShowFilter] = useState(true);
    const [b, sb] = useState('a1');
    const changeShowFilter = (): void => {
        setShowFilter(!showFilter);
    }

    const firstFilter = new DropDownList(filterData, "first");
    firstFilter.setState(sb);
    useEffect(()=>{
        console.log(firstFilter.name, firstFilter.getCurrentValue());
    }, [b])


    return (
        <div>
            <div className="filters" onClick={changeShowFilter}>
                {<Sort/>}
            </div>

            <div className={`${showFilter ? "filterOpen" : "filterClose "} filter__container`}>
                {firstFilter.render()}
            </div>

        </div>
    );
}