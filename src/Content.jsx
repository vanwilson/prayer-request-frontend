import { PrayersIndex } from "./PrayersIndex";
import { PrayersNew } from "./PrayersNew";

export function Content() {
  let prayer = [
    {
      id: 1,
      name: "Van Wilson",
      request: "Job search",
    },
    {
      id: 2,
      name: "Zion Wilson",
      request: "Get over this cold.",
    },
  ];

  return (
    <div>
      <PrayersNew />
      <PrayersIndex prayers={prayer} />
    </div>
  );
}
