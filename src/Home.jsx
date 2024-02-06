import { Signup } from "./Signup";
import { Login } from "./Login";

export function Home() {
  return (
    <div id="home">
      <Signup />
      <Login />
    </div>
  );
}
