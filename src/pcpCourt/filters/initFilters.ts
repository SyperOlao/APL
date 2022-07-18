import {DropDownList} from "../../Dashboard/Filters/FiltersComponents/DropDownList/DropDownList";
import {filtersData} from "./FilterData";
import {filter} from "../../store/reducers/filter/filterReducer";
import {store} from "../../store/store";
import {DropDownCheckBox} from "../../Dashboard/Filters/FiltersComponents/DropDownCheckBox/DropDownCheckBox";

export const firstFilter = new DropDownList(filtersData.filterData,
    filter.getInitialState().first1,
    (e: any) => store.dispatch(filter.actions.dropDownFirst1(e)))

export const firstFilter2 = new DropDownCheckBox(filtersData.filterData1,
    filter.getInitialState().first2,
    (e: any) => store.dispatch(filter.actions.dropDownFirst2(e)))
