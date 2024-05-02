import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PrayersIndex } from "./PrayersIndex";
import { Modal } from "./Modal";
import { EditPrayer } from "./EditPrayer";
import { MyPrayers } from "./MyPrayers";
import { Home } from "./Home";

export function Content() {
  const [prayers, setPrayers] = useState([]);
  const [myPrayers, setMyPrayers] = useState([]);
  const [isPrayerShowVisible, setIsPrayerShowVisible] = useState(false);
  const [currentPrayer, setCurrentPrayer] = useState({});

  const handleIndexPrayers = () => {
    axios.get("http://localhost:3000/prayers.json").then((response) => {
      setPrayers(response.data);
      setMyPrayers(filterMyPrayers(response.data));
    });
  };

  const handleShowPrayer = (prayer) => {
    setIsPrayerShowVisible(true);
    setCurrentPrayer(prayer);
  };

  const filterMyPrayers = (prayers) => {
    const user_id = localStorage.getItem("user_id");
    const myFilteredPrayers = prayers.filter((prayer) => {
      if (prayer.user_id == user_id) {
        console.log(prayer);
        return prayer;
      }
    });
    return myFilteredPrayers;
  };

  const handleClose = () => {
    setIsPrayerShowVisible(false);
  };

  useEffect(handleIndexPrayers, []);

  return (
    <div className="content">
      <Modal show={isPrayerShowVisible} onClose={handleClose}>
        <EditPrayer prayer={currentPrayer} />
      </Modal>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Prayers" element={<PrayersIndex prayersProp={prayers} />} />
        <Route path="/my_prayers" element={<MyPrayers myPrayers={myPrayers} onShowPrayer={handleShowPrayer} />} />
      </Routes>
    </div>
  );
}
