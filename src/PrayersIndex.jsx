/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { PrayersNew } from "./PrayersNew";
import { PrayerList } from "./components/PrayerList";

export function PrayersIndex(props) {
  const [prayers, setPrayers] = useState(props.prayers);

  const handleCreatePrayer = (params, successCallback) => {
    axios.post("http://localhost:3000/prayers.json", params).then((response) => {
      setPrayers([...prayers, response.data]);
      successCallback();
    });
  };

  return (
    <>
      <div id="prayers-index">
        <PrayerList prayers={props.prayers} setPrayers={setPrayers} />
        <PrayersNew onCreatePrayer={handleCreatePrayer} />
      </div>
    </>
  );
}
