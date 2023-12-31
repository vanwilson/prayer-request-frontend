import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PrayersIndex } from "./PrayersIndex";
import { Modal } from "./Modal";
import { PrayerShow } from "./PrayerShow";
import { MyPrayers } from "./MyPrayers";
import { Home } from "./Home";

export function Content() {
  const [prayers, setPrayers] = useState([]);
  const [isPrayerShowVisible, setIsPrayerShowVisible] = useState(false);
  const [currentPrayer, setCurrentPrayer] = useState({});

  const handleIndexPrayers = () => {
    axios.get("http://localhost:3000/prayers.json").then((response) => {
      setPrayers(response.data);
    });
  };

  const handleShowPrayer = (prayer) => {
    setIsPrayerShowVisible(true);
    setCurrentPrayer(prayer);
  };

  const handleUpdatePrayer = (id, params, successCallback) => {
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
    setIsPrayerShowVisible(false);
  };

  useEffect(handleIndexPrayers, []);

  return (
    <div>
      <Modal show={isPrayerShowVisible} onClose={handleClose}>
        <PrayerShow prayer={currentPrayer} onUpdatePrayer={handleUpdatePrayer} />
      </Modal>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Prayers" element={<PrayersIndex prayers={prayers} onShowPrayer={handleShowPrayer} />} />
        <Route path="/my_prayers" element={<MyPrayers prayers={prayers} onShowPrayer={handleShowPrayer} />} />
      </Routes>
    </div>
  );
}
