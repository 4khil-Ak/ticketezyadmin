import React, { useEffect, useState } from "react";

const AddCrew = (props) => {
    useEffect(() => {
        console.log("data", props.data);
    }, [])
    const [image, setImage] = useState(null);
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            // props.onChangeHandler(e,props.data);
        }
    };
    let Image = "";
    if (image !== null) {
        Image = (
            <>
                <img
                    src={image}
                    className="position-relative"
                    alt="preview"
                    style={{ zIndex: "2" }}
                />
            </>
        );
    } else {
        Image = (
            <>
                <small>Upload a imgae to continue</small>
            </>
        );
    }
    return (
        <div className="d-flex flex-column w-25">
            {/* <div className="p-1">
                <div
                    className="position-relative w-100 banner"
                    style={{ height: "235px", overflow: "hidden" }}
                >
                    <input
                        type="file"
                        onChange={e => onImageChange(e)}
                        onChange={onImageChange}
                        className="filetype"
                        id="crewimg"
                        name="crewimg"
                    />
                    <label className="uplabel" htmlFor="crewimg">
                        <i className="fa fa-upload fa-3x"></i>
                    </label>
                    {Image}
                </div>
            </div> */}
            <div className="p-1">
                <input
                    className="w-100 px-2 m-0"
                    type="text"
                    id="name"
                    onChange={(e)=> {
                        props.onChangeHandler(e,props.data)
                    }}
                    value={props.data.name}
                    placeholder="Enter Event Speaker Name"
                />
            </div>
        </div>
    )
}

export default AddCrew;