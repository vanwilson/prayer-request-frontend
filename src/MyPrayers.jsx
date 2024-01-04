/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

export function MyPrayers(props) {
  const [prayers, setPrayers] = useState([]);

  const handleMyPrayers = () => {
    let user_id = localStorage.getItem("user_id");
    axios.get(`http://localhost:3000/prayers.json?id=${user_id}`).then((response) => {
      setPrayers(response.data);
    });
  };

  useEffect(handleMyPrayers, []);

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
