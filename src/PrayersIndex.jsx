/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { PrayersNew } from "./PrayersNew";

export function PrayersIndex(props) {
  const [prayers, setPrayers] = useState([]);
  const [selectedPrayerType, setSelectedPrayerType] = useState("All");
  const [filteredPrayers, setFilteredPrayers] = useState(props.prayers);

  const prayer_types = Array.from(new Set(props.prayers.map((prayers) => prayers.prayer_type)));

  const filterByPrayerType = (prayer_type) => {
    setSelectedPrayerType(prayer_type);
    if (prayer_type === "All") {
      setFilteredPrayers(props.prayers);
    } else {
      setFilteredPrayers(
        props.prayers.filter((prayer) => {
          return prayer.prayer_type === prayer_type;
        })
      );
    }
  };

  useEffect(() => {
    if (selectedPrayerType === "All") {
      setFilteredPrayers(props.prayers);
    } else {
      setFilteredPrayers(
        props.prayers.filter((prayer) => {
          return prayer.prayer_type === selectedPrayerType;
        })
      );
    }
  }, [selectedPrayerType, props.prayers]);

  const handleCreatePrayer = (params, successCallback) => {
    axios.post("http://localhost:3000/prayers.json", params).then((response) => {
      setPrayers([...prayers, response.data]);
      successCallback();
    });
  };

  return (
    <div id="prayers-index">
      <div>
        <PrayersNew onCreatePrayer={handleCreatePrayer} />
      </div>
      <h1>Prayer Requests</h1>
      <select value={selectedPrayerType} onChange={(e) => filterByPrayerType(e.target.value)}>
        <option value="All">All prayer types</option>
        {prayer_types.map((prayer_type) => {
          return <option key={prayer_type}>{prayer_type}</option>;
        })}
      </select>
      <div id="accordion" className="prayers">
        {filteredPrayers.map((prayer) => (
          <div key={prayer.id}>
            <div className="card">
              <button
                className="btn collapsed"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <div className="card-header">
                  <h5 className="mb-0">
                    <div className="row row-cols-4">
                      <p>{prayer.pray_for}</p>
                      <p>{prayer.title}</p>
                      <p>{prayer.prayer_type}</p>
                    </div>
                  </h5>
                </div>
              </button>
              <div id="collapseOne" className="collapse show" aria-labelledby="heading" data-parent="#accordion">
                <div className="card-body">
                  <p>{prayer.body}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
