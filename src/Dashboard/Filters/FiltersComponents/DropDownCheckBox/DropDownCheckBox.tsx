import {AFilterComponent} from "../AFilterComponent";
import {IFilterData} from "../../../Interfaces/Interfaces";
import React, {ChangeEvent, useState} from "react";
import {FormControl, InputLabel, Select} from  "@material-ui/core";
import "./DropDownCkeckBox.css";

export class DropDownCheckBox extends AFilterComponent {
    private onChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        this._reduxOnChange(event.target.value);
        this.setCurrentValue(event.target.value);
    }

    public render(key: number): JSX.Element {
        return <DropDownCheckBoxComponent
            data={this.filterData} key={key}
            currentValue={this.getCurrentValue()}
            onChange={this.onChange.bind(this)} condition={this.condition}
            title={this.title}/>;
    }

}


const DropDownCheckBoxComponent = (props: {
    data: IFilterData[],
    currentValue: string | number | undefined,
    title: string,
    condition: boolean,
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}): JSX.Element => {
    const {data, currentValue, title, condition, onChange} = props;
    const [show, setShow] = useState(false);

    function showCheckboxes() {
        const checkboxes =
            document.getElementById("checkBoxes");
        if (checkboxes) {
            if (show) {
                checkboxes.style.display = "block";
                setShow(false);
            } else {
                checkboxes.style.display = "none";
                setShow(true);
            }
        }
    }

    return (
        <>
            {condition &&
                <form>
                    <div className="multipleSelection">
                        <div className="selectBox"
                             onClick={showCheckboxes}>
                            <select>
                                <option>Select options</option>
                            </select>
                            <div className="overSelect"></div>
                        </div>

                        <div id="checkBoxes">
                            <label htmlFor="first">
                                <input type="checkbox" id="first"/>
                                checkBox1
                            </label>

                            <label htmlFor="second">
                                <input type="checkbox" id="second"/>
                                checkBox2
                            </label>
                            <label htmlFor="third">
                                <input type="checkbox" id="third"/>
                                checkBox3
                            </label>
                            <label htmlFor="fourth">
                                <input type="checkbox" id="fourth"/>
                                checkBox4
                            </label>
                        </div>
                    </div>
                </form>
            }
        </>);
}