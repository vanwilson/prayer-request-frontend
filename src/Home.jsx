import { Signup } from "./Signup";
import { Login } from "./Login";

export function Home() {
  return (
    <div id="home" className="d-flex justify-content-center">
      <Signup />
      <Login />
    </div>
  );
}
