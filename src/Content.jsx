import axios from "axios";
import { useState, useEffect } from "react";
import { PrayersIndex } from "./PrayersIndex";
import { PrayersNew } from "./PrayersNew";
import { Signup } from "./Signup";
import { Login } from "./Login";

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
      <Signup />
      <Login />
      <PrayersNew />
      <PrayersIndex prayers={prayers} />
    </div>
  );
}
