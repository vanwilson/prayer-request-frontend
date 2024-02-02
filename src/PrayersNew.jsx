/* eslint-disable react/prop-types */
export function PrayersNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePrayer(params, () => event.target.reset());
    window.location.href = "/prayers";
  };

  return (
    <div className="prayers-new mx-5" id="prayers-new">
      <div>
        <h1 className="my-4 py-2">New Prayer Request</h1>
      </div>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="pt-4 pb-2 d-flex justify-content-center">
            <input className="text-box" name="pray_for" type="text" placeholder="Pray for" required />
          </div>
          <div className="p-2 d-flex justify-content-center">
            <input className="text-box" name="title" type="text" placeholder="Title" required />
          </div>
          <div className="p-2 d-flex justify-content-center">
            <input
              className="text-box"
              name="prayer_type"
              type="text"
              placeholder="Need, Praise, or Answered"
              required
            />
          </div>
          <div className="p-2 d-flex justify-content-center">
            <input className="body-box" name="body" type="text" placeholder="Full description" required />
          </div>
          <div className="d-flex justify-content-center p-2">
            <button type="submit" className="px-2 py-1">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
