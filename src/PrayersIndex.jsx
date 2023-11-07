export function PrayersIndex(props) {
  console.log(props);

  return (
    <div id="prayers-index">
      <h1>Prayers</h1>
      <div className="prayers">
        {props.prayers.map((prayer) => (
          <div key={prayer.id}>
            <h2>{prayer.name}</h2>
            <p>{prayer.request}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
