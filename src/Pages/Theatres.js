import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailsCard from "../Component/Theatres/DetailsCard";
import EditModal from "../Component/Theatres/EditModal";
import Axios from "axios";
import Loader from "../UI/Loader";
import $ from "jquery";

const Theatres = () => {
    const url = "https://apidev.ticketezy.com/theatres";
    const [theatre, setTheatre] = useState([]);
    const [theatreDetails, setTheatreDetails] = useState(null);
    const [theatreStatus, setTheatreStatus] = useState([null])
    const [editModal, setEditModal] = useState(false);
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    $(document).ready(function () {
        $(".filter-section-header div").click(function () {
            $(".filter-section-header div.active").removeClass("active");
            $(this).addClass("active");
        });
    });
    useEffect(() => {
        Axios.get(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => {
            setLoading(false);
            setTheatre(res.data);
        }).catch((error)=>{
            setLoading(false);
            alert(error.message)
        })
    }, [])

    const onChangeHandler = (theatreData) => {
        setEditModal((prevState) => {
            return !prevState;
        });
        setTheatreDetails(theatreData);
    };

    const onCloseHandler = () => {
        setEditModal((prevState) => {
            return !prevState;
        });
    }
    const addNew = () => {
        navigate("/addtheatre");
    };

    const all = () => {
        setTheatreStatus([]);
    }

    const active = () => {
        setTheatreStatus("active");
    }

    const inActive = () => {
        setTheatreStatus("inactive");
    }

    const NoData = () => {
        return (
            <>
                <div className="w-100 text-center">
                    <img className="no-data w-50 p-5" src="/images/nodata.gif" alt="nodata" />
                    <h4 className="text-primary">OOPS ! No Data to Display</h4>
                </div>
            </>
        )
    }

    let ui = null;
    if (theatreStatus === "active") {
        ui = <>
            {theatre !== null && theatre.filter(x => x.status === "active").map((data) => {
                return (
                    <DetailsCard details={data} editModal={onChangeHandler} key={data.secret} />
                )
            })
            }
        </>
    } else if (theatreStatus === "inactive") {
        ui = <>
            {theatre !== null && theatre.filter(x => x.status === "inactive").map((data) => {
                return (
                    <DetailsCard details={data} editModal={onChangeHandler} key={data.secret} />
                )
            })}
        </>
    } else {
        ui = <>
            {theatre !== null && theatre.map((data) => {
                return (
                    <DetailsCard details={data} onCloseHandler={onCloseHandler} editModal={onChangeHandler} key={data.secret} />
                )
            })}
        </>
    }

    return (
        <>
            <div className="container-fluid p-2">
                <div className="filter-section-header row py-2">
                    <div className="header-options add-btn" onClick={addNew}>
                        Add New Theatre
                    </div>
                    <div className="header-options active" onClick={all}>All</div>
                    <div className="header-options" onClick={active}>Active</div>
                    <div className="header-options" onClick={inActive}>In-Active</div>
                </div>
                <div className="grid-view-section row">
                    {ui}
                </div>
            </div>
            {editModal && <EditModal theatreDetails={theatreDetails} onCloseHandler={onCloseHandler} editModal={() => onChangeHandler(theatreData)} />}
            {loading && <Loader />}
        </>
    )
};
export default Theatres;
