function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All prayers</a> | <a href="#posts-new">New prayer request</a>
      </header>

      <div id="prayers-index">
        <h1>Prayers</h1>
        <div className="prayers">
          <h2>Van Wilson</h2>
          <p>Job search</p>
        </div>
        <div className="prayers">
          <h2>Zion Wilson</h2>
          <p>Get over this cold.</p>
        </div>
      </div>

      <div id="prayers-new">
        <h1>Prayer Request</h1>
        <form>
          <div>
            Name: <input type="text" />
          </div>
          <div>
            Prayer: <input type="text" />
          </div>
          <div></div>
        </form>
      </div>

      <footer>
        <p>Van Wilson</p>
        <p>Copyright 2023</p>
      </footer>
    </div>
  );
}

export default App;
