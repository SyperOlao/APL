import {Sort} from '@material-ui/icons';
import {useState} from "react";
import {DropDownList} from "./FiltersComponents/DropDownList/DropDownList";
import {AFilterComponent} from "./FiltersComponents/AFilterComponent";
import {connect} from "react-redux";
import {filter} from "../../store/reducers/filter/filterReducer";
import {filtersData} from "./FilterData";
import {store} from "../../store/store";


const firstFilter = new DropDownList(filtersData.filterData,
    filter.getInitialState().first1,
    (e: any) => store.dispatch(filter.actions.dropDownFirst1(e)))


const Filters = (): JSX.Element => {
    const [showFilter, setShowFilter] = useState(true);
    const filters: AFilterComponent[] = [firstFilter];
    const changeShowFilter = (): void => {
        setShowFilter(!showFilter);
    }
    // filters[0].reduxOnChange = props.drop1;
    console.log(filters[0].getCurrentValue())

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
        first2: state.filter.first2,
    }
}
const mapDispatchToProps = {
    drop1: filter.actions.dropDownFirst1,
    drop2: filter.actions.dropDownFirst2,
}
export default connect(mapStateToProps, mapDispatchToProps)(Filters);