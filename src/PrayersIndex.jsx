/* eslint-disable react/prop-types */
export function PrayersIndex(props) {
  console.log(props);

  return (
    <div id="prayers-index">
      <h1>Prayers</h1>
      <div className="prayers">
        {props.prayers.map((prayer) => (
          <div key={prayer.id}>
            <h2>{prayer.pray_for}</h2>
            <p>{prayer.title}</p>
            <p>{prayer.prayer_type}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
