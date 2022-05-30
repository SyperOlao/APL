import {Sort} from '@material-ui/icons';
import {useState} from "react";
import {DropDownList} from "./FiltersComponents/DropDownList/DropDownList";
import {IFilterData} from "../Interfaces/Interfaces";

export const Filters = (): JSX.Element => {
    const [showFilter, setShowFilter] = useState(true);
    const changeShowFilter = (): void => {
        setShowFilter(!showFilter);

    }

    return (
        <div>
            <div className="filters" onClick={changeShowFilter}>
                {<Sort/>}
            </div>

                <div className={`${showFilter? "filterOpen": "filterClose "} filter__container` }>
                    {new DropDownList([{label: 'a', value: 'b'}] as IFilterData[]).render()}
                </div>

        </div>
    );
}