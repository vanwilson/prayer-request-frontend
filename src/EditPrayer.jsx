/* eslint-disable react/prop-types */
import axios from "axios";

export function EditPrayer(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleUpdatePrayer(props.prayer.id, params, () => event.target.reset());
    window.location.href = "/my_prayers";
  };

  const handleUpdatePrayer = (id, params, successCallback) => {
    axios.patch(`http://localhost:3000/prayers/${id}.json`, params);
  };

  return (
    <div>
      <h1>Edit Prayer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Pray for: <input defaultValue={props.prayer.pray_for} name="pray_for" type="text" />
        </div>
        <div>
          Title: <input defaultValue={props.prayer.title} name="title" type="text" />
        </div>
        <div>
          Prayer type: <input defaultValue={props.prayer.prayer_type} name="prayer_type" type="text" />
        </div>
        <div>
          Body: <input defaultValue={props.prayer.body} name="body" type="text" />
        </div>
        <button type="submit">Update prayer</button>
      </form>
    </div>
  );
}
