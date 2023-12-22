import axios from "axios";
import { useState, useEffect } from "react";
import { PrayersIndex } from "./PrayersIndex";
import { PrayersNew } from "./PrayersNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Modal } from "./Modal";
import { PrayerShow } from "./PrayerShow";

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
        <PrayerShow prayer={currentPrayer} />
      </Modal>
    </div>
  );
}
