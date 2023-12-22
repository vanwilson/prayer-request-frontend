export function PrayersNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePrayer(params, () => event.target.reset());
    window.location.href = "/";
  };

  return (
    <div id="prayers-new">
      <h1>New Prayer Request</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Pray for: <input name="pray_for" type="text" required />
        </div>
        <div>
          Title: <input name="title" type="text" required />
        </div>
        <div>
          Prayer type: <input name="prayer_type" type="text" required />
        </div>
        <div>
          Body: <input name="body" type="text" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
