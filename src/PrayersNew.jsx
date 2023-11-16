export function PrayersNew() {
  return (
    <div id="prayers-new">
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="inputPassword6" className="col-form-label">
            Title
          </label>
        </div>
        <div className="col-auto">
          <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
        </div>
        <div className="col-auto">
          <span id="passwordHelpInline" className="form-text">
            Your prayer within 6 words.
          </span>
        </div>
      </div>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label htmlFor="inputPassword6" className="col-form-label">
            Body
          </label>
        </div>
        <div className="col-auto">
          <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" />
        </div>
      </div>
    </div>
  );
}
