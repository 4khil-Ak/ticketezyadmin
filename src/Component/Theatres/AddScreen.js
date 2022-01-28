import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import Axios from "axios";
import Loader from "../../UI/Loader";

const AddScreen = () => {
  let params = useParams();
  let navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const [screen, setScreen] = useState({
    name: "",
    screen_type: "",
    resolution: "",
    sound_system: "",
  });
  const ScreenType = [
    { value: '2D', label: '2D' },
    { value: '3D', label: '3D' }
  ];
  const ScreenResolution = [
    { value: '2000x2000', label: '2000 x 2000' },
    { value: '3000x3000', label: '3000 x 3000' },
    { value: '40000x4000', label: '4000 x 4000' }
  ];
  const SoundSystem = [
    { value: '3.1', label: '3.1' },
    { value: '4.1', label: '4.1' },
    { value: '5.1', label: '5.1' },
    { value: '5.4', label: '5.4' }
  ];
  const onChangeHandler = (event, action) => {
    const tempInputs = JSON.parse(JSON.stringify(screen));
    if (event.target) {
      tempInputs[event.target.name] = event.target.value;
    } else if (action) {
      tempInputs[action.name] = event.value;
    }
    setScreen(tempInputs);
  };
  const url = `https://apidev.ticketezy.com/theatres/${params.id}/screens`;
  const handleSubmit = () => {
    const tempInputs = JSON.parse(JSON.stringify(screen));
    if (
      screen.name === "" ||
      screen.screen_type === "" ||
      screen.resolution === "" ||
      screen.sound_system === ""
    ) {
      setError("Enter valid data !");
    } else {
      setLoading(true);
      Axios
        .post(
          url,
          {
            screen: tempInputs,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((resp) => {
          setLoading(false);
          navigate(`/theaterdetails/${params.id}`);
        })
        .catch((error) => {
          setLoading(false);
          setError("Netwrok Error !\nTry again Later");
        });
    }
  };
  const handleCancel = () => {
    navigate(`/theaterdetails/${params.id}`);
  };
  return (
    <>
      <div className="details p-3" style={{ background: "#fff" }}>
        <h3 className="text-dark p-2">Add Screen</h3>
        <div className="col-12 p-0">
          {error && <Alert variant="danger">{error}</Alert>}
        </div>
        <div
          className="d-flex flex-wrap p-2"
          style={{ background: "var(--secondary)", borderRadius: "8px" }}
        >
          <div className="col-md-4 row p-2 px-4">
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlFor="name">Screen Name</label>
              <input
                className="m-0 px-2"
                type="text"
                id="name"
                name="name"
                onChange={onChangeHandler}
                value={screen.name}
                placeholder="Enter Screen Name"
              />
            </div>
          </div>
          <div className="col-md-2 row p-2 px-4">
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlFor="screen_type">Screen Type</label>
              <Select
                options={ScreenType}
                id="screen_type"
                name="screen_type"
                value={ScreenType.filter(function (option) {
                  return option.value === screen.screen_type;
                })}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="col-md-3 row p-2 px-4">
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlFor="resolution">Screen Resolution</label>
              <Select
                options={ScreenResolution}
                id="resolution"
                name="resolution"
                value={ScreenResolution.filter(function (option) {
                  return option.value === screen.resolution;
                })}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="col-md-3 row p-2 px-4">
            <div className="d-flex w-100 flex-column mb-md-3">
              <label htmlFor="sound_system">Sound System</label>
              <Select
                options={SoundSystem}
                id="sound_system"
                name="sound_system"
                value={SoundSystem.filter(function (option) {
                  return option.value === screen.sound_system;
                })}
                onChange={onChangeHandler}
              />
            </div>
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
      {loading && <Loader />}
    </>
  );
};

export default AddScreen;
