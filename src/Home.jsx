import { Signup } from "./Signup";
import { Login } from "./Login";

export function Home() {
  return (
    <div id="home" className="all-prayers">
      <div className="signup-header">
        <Signup />
      </div>
      <div className="prayers-new form sticky-xl-top sticky-lg-top sticky-md-top">
        <Login />
      </div>
    </div>
  );
}
