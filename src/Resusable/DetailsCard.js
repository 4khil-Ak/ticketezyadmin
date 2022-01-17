import Axios from "axios";
import React, {useState} from "react";
import Loader from "../UI/Loader";
import { Link, useNavigate } from "react-router-dom";

const DetailsCard = (props) => {
  const [loading, setLoading] = useState(false);
  const onDeleteHandler = (details) => {
    alert("Are you sure want to delete this event")
    setLoading(true)
    let deleteId = details.secret;
    const url = `https://apidev.ticketezy.com/events/${deleteId}`;
    Axios.delete(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      setLoading(false);
      alert("Event has been  deleted successfully");
      window.location.reload();
    }).catch((error) => {
      setLoading(false)
      alert("OOPS an error occured !\n\nPlease try again later")
    })
  }
  return (
    <>
      <div className="col-sm-6 col-md-3 px-3 py-2">
        <div className="card box-shadow p-2">
          {/* <img src="/images/events.png" className="card-img" alt="section" /> */}
          <div className="pb-2">
            <p className="title f-600">{props.details.title}</p>
            <p className="location">Location: <b>{props.details.location}</b></p>
            <p className="venue">Venue: <b>{props.details.venue}</b></p>
            <p className="duration">Duration: <b>{props.details.duration}</b></p>
          </div>
          <div className="card-footer bg-transparent row py-2">
            <Link className="footer-icon fas fa-eye text-primary" to={`/eventdetails/${props.details.secret}`} key={props.details.secret}></Link>
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
