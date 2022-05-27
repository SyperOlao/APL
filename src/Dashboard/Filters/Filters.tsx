import {Sort} from '@material-ui/icons';
import {useState} from "react";

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
            {showFilter &&
                <div className="filter__container">

                </div>
            }
        </div>
    );
}