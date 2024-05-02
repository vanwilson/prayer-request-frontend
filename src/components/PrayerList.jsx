/* eslint-disable react/prop-types */
import { EditPrayer } from "../EditPrayer";
import { useState, useEffect } from "react";

export function PrayerList(props) {
  console.log(props.prayers);
  const [selectedPrayerType, setSelectedPrayerType] = useState("All");
  const [filteredPrayers, setFilteredPrayers] = useState(props.prayers);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedPrayer, setSelectedPrayer] = useState(null);

  useEffect(() => {
    if (selectedPrayerType === "All") {
      setFilteredPrayers(props.prayers.reverse());
    } else {
      setFilteredPrayers(
        props.prayers.filter((prayer) => {
          return prayer.prayer_type === selectedPrayerType;
        })
      );
    }
  }, [selectedPrayerType, props.prayers]);

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

  return (
    <div className="col-l-8">
      <div className="prayers-header">
        <h1 className="pt-3">Prayer Requests</h1>
      </div>
      <div className="prayers-menu">
        <select className="mt-2 mb-3" value={selectedPrayerType} onChange={(e) => filterByPrayerType(e.target.value)}>
          <option value="All">Prayers</option>
          {prayer_types.map((prayer_type) => {
            return <option key={prayer_type}>{prayer_type}</option>;
          })}
        </select>
      </div>
      <div className="prayer-cards">
        <div className="accordion" id="accordionExample">
          {filteredPrayers.map((prayer) => (
            <div key={prayer.id}>
              <div className="accordion-item">
                <h5 className="accordion-header" id={`heading-prayer-${prayer.id}`}>
                  <div className="card">
                    <div className="card-header">
                      <div>
                        <div className="row row-cols-4">
                          <p className="d-flex justify-content-center text-center mb-0 px-0">{prayer.pray_for}</p>
                          <p className="d-flex justify-content-center text-center mb-0 px-0">{prayer.title}</p>
                          <p className="d-flex justify-content-center text-center mb-0 px-0">{prayer.prayer_type}</p>
                          <div>
                            <button
                              className="accordion-button collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse-prayer-${prayer.id}`}
                              aria-expanded="false"
                              aria-controls={`collapse-prayer-${prayer.id}`}
                            ></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </h5>
                <div
                  id={`collapse-prayer-${prayer.id}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`collapse-prayer-${prayer.id}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body py-0">
                    <p className="py-2 mb-0">{prayer.body}</p>
                    {props.isLoggedInUserPrayers ? (
                      <button
                        onClick={() => {
                          setSelectedPrayer(prayer);
                          setIsEditFormOpen(!isEditFormOpen);
                        }}
                      >
                        edit
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isEditFormOpen ? <EditPrayer prayer={selectedPrayer} /> : null}
    </div>
  );
}
