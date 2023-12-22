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
              <button
                className="btn collapsed"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                <div className="card-header">
                  <h5 className="mb-0">
                    <div className="row row-cols-3">
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
