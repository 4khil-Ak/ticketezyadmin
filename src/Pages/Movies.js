import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Loader from "../UI/Loader";
import $ from "jquery";
import DetailsCard from "../Component/Movies/DetailsCard";

const movies = () => {
    let navigate = useNavigate();
    const url = "https://apidev.ticketezy.com/movies";
    const [movies, setMovies] = useState(null);
    const [editModal, setEditModal] = useState(false);
    const [loading, setLoading] = useState(true);
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
            setMovies(res.data);
        }).catch((Error) => {
            setLoading(false);
            alert("Failed to load data. Try again Later")
        })
    }, [])
    const onChangeHandler = () => {
        setEditModal((prevState) => {
            return !prevState;
        });
    };

    const addNew = () => {
        navigate("/addevent");
    };

    let ui = null;
    if (movies === null) {
        ui = <>
            <div className="w-100 text-center">
                <img className="no-data w-50 p-5" src="/images/nodata.gif" alt="nodata" />
                <h4 className="text-primary">OOPS ! No Data to Display</h4>
            </div>
        </>
    } else {
        ui = <>
            {movies.map((data) => {
                return (
                    <DetailsCard details={data} editModal={onChangeHandler} key={data.secret} />
                )
            })}
        </>
    }

    return (
        <>
            <div className="container-fluid p-2">
                <div className="filter-section-header row py-2">
                    <div className="header-options add-btn" onClick={addNew}>
                        Add New Movie
                    </div>
                    <div className="header-options active">All</div>
                </div>
                <div className="grid-view-section row">
                    {ui}
                </div>
            </div>
            {/* {editModal && <EditModal editModal={() => onChangeHandler(movies)} />} */}
            {loading && <Loader />}
        </>
    );
};

export default movies;
