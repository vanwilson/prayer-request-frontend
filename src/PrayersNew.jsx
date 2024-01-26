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
        <h1 className="m-4 p-2">New Prayer Request</h1>
      </div>
      <div className="card m-2">
        <form onSubmit={handleSubmit}>
          <div className="p-2">
            Pray for: <input name="pray_for" type="text" placeholder="Name of person who needs prayer" required />
          </div>
          <div className="p-2">
            Title: <input name="title" type="text" placeholder="7 words or less" required />
          </div>
          <div className="p-2">
            Prayer type: <input name="prayer_type" type="text" placeholder="Need, Praise, or Answered" required />
          </div>
          <div className="p-2">
            Body: <input name="body" type="text" placeholder="Full description" required />
          </div>
          <div className="d-flex justify-content-center p-2 mb-5">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
