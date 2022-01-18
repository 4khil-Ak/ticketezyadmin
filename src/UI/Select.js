import React from "react";
import Select from "react-select";

const SelectComponent = (props) => {
    return (
        <Select
            options={props.options}
            id={props.id}
            name={props.name}
            value={props.options.filter(function(option){
                return option.value === props.value;
            })}
            onChange={props.onChangeHandler}
        />
    )
}

export default SelectComponent;