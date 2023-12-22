/* eslint-disable react/prop-types */
export function PrayerShow(props) {
  return (
    <div>
      <h1>Edit Prayer</h1>
      <p>Pray for: {props.prayer.pray_for}</p>
      <p>Title: {props.prayer.title}</p>
      <p>Prayer type: {props.prayer.prayer_type}</p>
      <p>Body: {props.prayer.body}</p>
    </div>
  );
}
