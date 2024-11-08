import Container from "./conponent/container.jsx";
import Navbar from "./conponent/navBer/navBar.jsx";
import Reading from "./conponent/reading/reading.jsx";
import "./App.css";

function App() {
  return (
    <div className="Container">
      <Container>
        <Navbar></Navbar>
        <Reading></Reading>
      </Container>
    </div>
  );
}

export default App;
