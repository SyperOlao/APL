import {Sort} from '@material-ui/icons';
import {ChangeEvent, useEffect, useImperativeHandle, useState} from "react";
import {DropDownList} from "./FiltersComponents/DropDownList/DropDownList";
import {IFilterData} from "../Interfaces/Interfaces";
import {IFilterComponent} from "./FiltersComponents/IFilterComponent";
import {AFilterComponent} from "./FiltersComponents/AFilterComponent";
import {connect} from "react-redux";
import {filter} from "../../store/reducers/filter/filterReducer";

const filterData: IFilterData[] = [
    {label: 'a1', value: 'b1'},
    {label: 'a2', value: 'b2'},
    {label: 'a3', value: 'b3'},
    {label: 'a4', value: 'b4'},
];

const filterData1: IFilterData[] = [
    {label: 'k1', value: 'r1'},
    {label: 'k2', value: 'r2'},
    {label: 'k3', value: 'r3'},
    {label: 'k4', value: 'r4'},
];

const firstFilter = new DropDownList(filterData, "first");
const firstFilter2 = new DropDownList(filterData1, "first1");


const Filters = (props: any): JSX.Element => {
    const [showFilter, setShowFilter] = useState(true);
    const filters: AFilterComponent[] = [firstFilter, firstFilter2];
    const changeShowFilter = (): void => {
        setShowFilter(!showFilter);
    }
    filters[0].setCurrentValue(props.first1);
    filters[0].reduxOnChange = props.drop;
    console.log(filters[0].getCurrentValue())
    console.log(props.first1)
    return (
        <div>
            <div className="filters" onClick={changeShowFilter}>
                {<Sort/>}
            </div>

            <div className={`${showFilter ? "filterOpen" : "filterClose "} filter__container`}>
                {filters.map((filter, i) => filter.render(i))}
            </div>

        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        first1: state.filter.first1,
    }
}
const mapDispatchToProps = {
    drop: filter.actions.dropDown,
}
export default connect(mapStateToProps, mapDispatchToProps)(Filters);