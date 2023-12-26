import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PrayersIndex } from "./PrayersIndex";
import { PrayersNew } from "./PrayersNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Modal } from "./Modal";
import { PrayerShow } from "./PrayerShow";
import { MyPrayers } from "./MyPrayers";

export function Content() {
  const [prayers, setPrayers] = useState([]);
  const [isPrayerShowVisible, setIsPrayerShowVisible] = useState(false);
  const [currentPrayer, setCurrentPrayer] = useState({});

  const handleIndexPrayers = () => {
    console.log("handleIndexPrayers");
    axios.get("http://localhost:3000/prayers.json").then((response) => {
      console.log(response.data);
      setPrayers(response.data);
    });
  };

  const handleMyPrayers = () => {
    console.log("handleMyPrayers");
    localStorage.getItem("user_id");
    axios.get(`http://localhost:3000/prayers.json?id=${user_id}`).then((response) => {
      console.log(response.data);
      setPrayers(response.data);
    });
  };

  const handleCreatePrayer = (params, successCallback) => {
    console.log("handleCreatePrayer", params);
    axios.post("http://localhost:3000/prayers.json", params).then((response) => {
      setPrayers([...prayers, response.data]);
      successCallback();
    });
  };

  const handleShowPrayer = (prayer) => {
    console.log("handleShowPrayer", prayer);
    setIsPrayerShowVisible(true);
    setCurrentPrayer(prayer);
  };

  const handleUpdatePrayer = (id, params, successCallback) => {
    console.log("handleUpdatePrayer", params);
    axios.patch(`http://localhost:3000/prayers/${id}.json`, params).then((response) => {
      setPrayers(
        prayers.map((prayer) => {
          if (prayer.id === response.data.id) {
            return response.data;
          } else {
            return prayer;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPrayerShowVisible(false);
  };

  useEffect(handleIndexPrayers, []);

  return (
    <div>
      <Signup />
      <Login />
      <PrayersNew onCreatePrayer={handleCreatePrayer} />
      <PrayersIndex prayers={prayers} onShowPrayer={handleShowPrayer} />
      <Modal show={isPrayerShowVisible} onClose={handleClose}>
        <PrayerShow prayer={currentPrayer} onUpdatePrayer={handleUpdatePrayer} />
      </Modal>
      <Routes>
        <Route path="/my_prayers" element={<MyPrayers onMyPrayers={handleMyPrayers} />} />
      </Routes>
    </div>
  );
}
