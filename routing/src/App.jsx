import { Outlet } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <>
      <h1>Hello I Am App</h1>
      <Header></Header>
      <Outlet></Outlet>
      <h1>Hello I am Footer</h1>
    </>
  );
}

export default App;
