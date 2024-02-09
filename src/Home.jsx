import { Signup } from "./Signup";
import { Login } from "./Login";

export function Home() {
  return (
    <div id="home">
      <div>
        <Signup />
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}
