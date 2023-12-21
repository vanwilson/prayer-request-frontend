import axios from "axios";
import { useState, useEffect } from "react";
import { PrayersIndex } from "./PrayersIndex";
import { PrayersNew } from "./PrayersNew";

export function Content() {
  const [prayers, setPrayers] = useState([]);

  const handleIndexPrayers = () => {
    console.log("handleIndexPrayers");
    axios.get("http://localhost:3000/prayers.json").then((response) => {
      console.log(response.data);
      setPrayers(response.data);
    });
  };

  useEffect(handleIndexPrayers, []);

  return (
    <div>
      <PrayersNew />
      <PrayersIndex prayers={prayers} />
    </div>
  );
}
