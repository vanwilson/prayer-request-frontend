/* eslint-disable react/prop-types */
import { PrayerList } from "./components/PrayerList";

export function MyPrayers(props) {
  return (
    <div id="my-prayers">
      <h1>My Prayers</h1>
      <PrayerList prayers={props.myPrayers} />
    </div>
  );
}
