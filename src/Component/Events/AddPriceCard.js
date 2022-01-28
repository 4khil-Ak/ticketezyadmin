import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import Select from "react-select";
import { ClassOptions } from "../../Helpers/ClassOptions";

const AddPriceCard = () => {
  let params = useParams();
  let url = `https://apidev.ticketezy.com/events/${params.id}/event_seats`;
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const snakeCase = (string) => {
    return string
      .replace(/\d+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map((word) => word.toLowerCase())
      .join("_");
  };

  const handleSubmit = () => {
    setLoading(true);
    let values = {};
    let eventSeats = list.map((value) => {
      values[snakeCase(value.name.toLowerCase())] = {
        total_seats: value.total_seats,
        available_seats: value.available_seats,
      };
      return true;
    });
    let prices = {};
    let priceCard = list.map((value) => {
      prices[snakeCase(value.name)] = value.price;
    });
    Axios.post(
      url,
      {
        event_seat: {
          seats: values,
          price_card: prices,
        },
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setLoading(false);
        navigate(`/eventdetails/${params.id}`);
      })
      .catch((error) => {
        setLoading(false);
        alert("Network Error");
      });
  };
  const handleCancel = () => {
    navigate(`/eventdetails/${params.id}`);
  };
  const addSeat = () => {
    // create an array
    let addData = {
      id: list.length,
      name: "",
      price: "",
      total_seats: "",
      available_seats: "",
    };
    setList((prevState) => {
      return [...prevState, addData];
    });
  };
  const onChangeHandler = (e, data) => {
    setList((prevState) => {
      let updatedData = null;
      if (e.target.name === "name") {
        updatedData = {
          ...data,
          name: e.target.value,
        };
      } else if (e.target.name === "price") {
        updatedData = {
          ...data,
          price: e.target.value,
        };
      } else if (e.target.name === "total") {
        updatedData = {
          ...data,
          total_seats: e.target.value,
        };
      } else {
        updatedData = {
          ...data,
          available_seats: e.target.value,
        };
      }
      prevState[data.id] = updatedData;
      return [...prevState];
    });
  };
  return (
    <>
      <div className="details p-3" style={{ background: "#fff" }}>
        <h3 className="text-dark p-2">Add Price Card !</h3>
        <div
          className="d-flex flex-column p-4"
          style={{ background: "var(--secondary)", borderRadius: "8px" }}
        >
          <div className="w-100 p-2">
            <label className="mb-2">Price Card & Seatings</label>&ensp;
            <i
              className="fas fa-plus text-success cursor-pointer"
              onClick={addSeat}
            ></i>
            {list.map((data) => {
              return (
                <div className="row p-2 align-items-center" key={data.id}>
                  <div className="d-flex align-items-center col-12 col-lg-3 p-0 pr-3 text-right">
                    <input
                      type="text"
                      className="special border-0 m-0 font-weight-bold"
                      placeholder="Enter Class Name"
                      style={{ letterSpacing: "1px" }}
                      name="name"
                      onChange={(e) => {
                        onChangeHandler(e, data);
                      }}
                      value={data.name}
                    />
                    &ensp;
                    <i className="fa fa-minus text-danger cursor-pointer"></i>
                  </div>
                  <div className="col-lg-1 px-1">
                    <input
                      className="w-100 m-0 px-2"
                      type="number"
                      placeholder="Price"
                      name="price"
                      onChange={(e) => {
                        onChangeHandler(e, data);
                      }}
                      value={data.price}
                    />
                    <small className="tagger">Price</small>
                  </div>
                  <div className="col-lg-2 px-1">
                    <input
                      className="w-100 m-0 px-2"
                      type="number"
                      placeholder="cgst in %"
                    />
                    <small className="tagger">cgst %</small>
                  </div>
                  <div className="col-lg-2 px-1">
                    <input
                      className="w-100 m-0 px-2"
                      type="number"
                      placeholder="sgst in %"
                    />
                    <small className="tagger">sgst %</small>
                  </div>
                  <div className="col-lg-2 px-1">
                    <input
                      className="w-100 m-0 px-2"
                      type="number"
                      name="total"
                      placeholder="Total"
                      onChange={(e) => {
                        onChangeHandler(e, data);
                      }}
                      value={data.total_seats}
                    />
                    <small className="tagger">total seats</small>
                  </div>
                  <div className="col-lg-2 px-1">
                    <input
                      className="w-100 m-0 px-2"
                      type="number"
                      placeholder="Available"
                      onChange={(e) => {
                        onChangeHandler(e, data);
                      }}
                      value={data.available_seats}
                    />
                    <small className="tagger">available seats</small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row justify-content-end pt-3">
          <button
            className="btn btn-primary mr-2 px-3"
            type="button"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            className="btn btn-primary px-3"
            type="submit"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default AddPriceCard;
