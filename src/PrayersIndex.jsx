/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { PrayersNew } from "./PrayersNew";
import { PrayerList } from "./components/PrayerList";

export function PrayersIndex({ prayersProp }) {
  const [prayers, setPrayers] = useState(prayersProp);

  const handleCreatePrayer = (params, successCallback) => {
    axios.post("http://localhost:3000/prayers.json", params).then((response) => {
      setPrayers([...prayers, response.data]);
      successCallback();
    });
  };

  return (
    <>
      <div id="prayers-index">
        <PrayerList prayers={prayersProp} setPrayers={setPrayers} />
        <PrayersNew onCreatePrayer={handleCreatePrayer} />
      </div>
    </>
  );
}
