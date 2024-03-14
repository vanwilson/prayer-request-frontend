import { Signup } from "./Signup";
import { Login } from "./Login";

export function Home() {
  return (
    <div id="home" className="flex-container">
      <div className="col-l-1"></div>
      <div className="col-l-5">
        <Login />
      </div>
      <div className="col-l-5">
        <Signup />
      </div>
      <div className="col-l-1"></div>
    </div>
  );
}
