
import React from "react";
import { FilterLabel, FilterInput } from './Filter.styled'
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "components/redux/selectors";
import { changeFilter } from "components/redux/filterSlice";

const Filter = () => {
    const value = useSelector(selectFilter);
    const dispatch = useDispatch();

    const onChange = evt => {
        const normalizedValue = evt.target.value.toLowerCase();

        dispatch(changeFilter(normalizedValue));
    }

    return (
        <div>
            <FilterLabel>
                Find contacts by name
                <FilterInput
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </FilterLabel>
             
        </div>
    )
};

export default Filter;
