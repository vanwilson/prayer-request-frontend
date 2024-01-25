/* eslint-disable react/prop-types */
export function PrayersNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePrayer(params, () => event.target.reset());
    window.location.href = "/prayers";
  };

  return (
    <div id="prayers-new">
      <div className="prayers-new w-100 d-flex justify-content-right">
        <h1>New Prayer Request</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            Pray for: <input name="pray_for" type="text" placeholder="Name of person who needs prayer" required />
          </div>
          <div>
            Title: <input name="title" type="text" placeholder="7 words or less" required />
          </div>
          <div>
            Prayer type: <input name="prayer_type" type="text" placeholder="Need, Praise, or Answered" required />
          </div>
          <div>
            Body: <input name="body" type="text" placeholder="Full description" required />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
