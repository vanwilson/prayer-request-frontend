/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { PrayersNew } from "./PrayersNew";

export function PrayersIndex(props) {
  const [prayers, setPrayers] = useState([]);
  console.log(props);

  const handleCreatePrayer = (params, successCallback) => {
    console.log("handleCreatePrayer", params);
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
      <div id="accordion" className="prayers">
        {props.prayers.map((prayer) => (
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
                      <button onClick={() => props.onShowPrayer(prayer)}>Edit</button>
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
