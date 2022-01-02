import React from "react";
import Switch from "react-switch";

const SwitchComponent = (props) => {
    return (
        <Switch
            checked={props.checked}
            onChange={props.handleChange}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={14}
            width={35}
            className="react-switch"
            className="float-right"
        />
    )
}

export default SwitchComponent;