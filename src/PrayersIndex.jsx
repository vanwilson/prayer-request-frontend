/* eslint-disable react/prop-types */
export function PrayersIndex(props) {
  console.log(props);

  return (
    <div id="prayers-index">
      <h1>Prayers</h1>
      <div id="accordion" className="prayers">
        {props.prayers.map((prayer) => (
          <div key={prayer.id}>
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <div className="row row-cols-3">
                      <h2>{prayer.pray_for}</h2>
                      <p>{prayer.title}</p>
                      <p>{prayer.prayer_type}</p>
                    </div>
                  </button>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
