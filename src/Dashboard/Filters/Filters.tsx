import {Sort} from '@material-ui/icons';
import {useState} from "react";
import {AFilterComponent} from "./FiltersComponents/AFilterComponent";
import {connect} from "react-redux";
import {firstFilter, firstFilter2} from "../../pcpCourt/filters/initFilters";



const Filters = (): JSX.Element => {
    const [showFilter, setShowFilter] = useState(true);
    const filters: AFilterComponent[] = [firstFilter, firstFilter2];
    const changeShowFilter = (): void => {
        setShowFilter(!showFilter);
    }

    console.log(filters[1].getCurrentValue())

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

export default connect(mapStateToProps)(Filters);