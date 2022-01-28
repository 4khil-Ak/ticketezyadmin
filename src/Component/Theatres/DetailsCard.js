import Axios from "axios";
import SwitchComponent from "../../UI/Switch";
import React, { useState, useEffect } from "react";
import Loader from "../../UI/Loader";
import { Link } from "react-router-dom";

const DetailsCard = (props) => {
  let id = null;
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prevState) => {
      return !prevState;
    });
    setLoading(true);
    if (checked === true) {
      id = "inactive"
    } else {
      id = "active"
    }
    Axios.patch(`https://apidev.ticketezy.com/theatres/${props.details.secret}/change-status`, {
      status: id
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      setLoading(false)
      window.location.reload();
    }).catch((error) => {
      setLoading(false)
      alert("Network Error !\nTry again");
    })
  };
  useEffect(() => {
    if (props.details.status === "active") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [])
  const onDeleteHandler = (details) => {
    alert("Are you sure want to delete this theater");
    setLoading(true)
    let deleteId = details.secret;
    // if (props.details.status === "active") {
    const url = `https://apidev.ticketezy.com/theatres/${deleteId}`;
    Axios.delete(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      setLoading(false);
      alert("Theater has been  deleted successfully");
      window.location.reload();
    }).catch((error) => {
      setLoading(false)
      alert("OOPS an error occured !\n\nPlease try again later")
    })
    // } else {
    //   setLoading(false)
    //   alert("Cannot delete inactive Theater")
    // }
  }
  return (
    <>
      <div className="col-sm-6 col-md-3 px-3 py-2">
        <div className="card box-shadow p-2">
          <div className="pb-2">
            <SwitchComponent checked={checked} handleChange={handleChange} />
            <p className="title f-600">{props.details.name}</p>
            <p className="location">Owner: <b>{props.details.owner}</b></p>
            <p className="venue">Mobile: <b>{props.details.mobile}</b></p>
            <p className="duration">Location: <b>{props.details.place}</b></p>
          </div>
          <div className="card-footer bg-transparent row py-2">
            <Link className="footer-icon fas fa-eye text-primary" to={`/theaterdetails/${props.details.secret}`} key={props.details.secret}></Link>
            <i
              className="footer-icon fas fa-edit text-secondary"
              onClick={() => props.editModal(props.details)}
            ></i>
            <i className="footer-icon fa fa-trash ml-auto mr-0 text-danger" onClick={() => onDeleteHandler(props.details)}></i>
          </div>
        </div>
      </div>
      {loading && <Loader />}
    </>
  );
};

export default DetailsCard;
