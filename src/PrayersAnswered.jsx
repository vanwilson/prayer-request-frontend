/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

export function PrayersAnswered(props) {
  console.log(props);

  const [prayers, setPrayers] = useState([]);

  const handlePrayersAnswered = () => {
    console.log("handlePrayersAnswered");
    axios.get(`http://localhost:3000/prayers.json?prayer_type=Answered`).then((response) => {
      console.log(response.data);
      setPrayers(response.data);
    });
  };

  useEffect(handlePrayersAnswered, []);

  return (
    <div id="my-prayers">
      <h1>My Prayers</h1>
      <div id="accordion" className="prayers">
        {prayers.map((prayer) => (
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
