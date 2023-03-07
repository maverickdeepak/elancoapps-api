import { Route, Routes } from "react-router-dom";

// COMPONENTS
import Resources from "./components/Resources";
import SingleResource from "./components/SingleResource";

function App() {
  return (
    <div class="flex items-center justify-center mt-2 ">
      <Routes>
        <Route path="/" element={<Resources />} />
        <Route path="/:resource" element={<SingleResource />} />
      </Routes>
    </div>
  );
}

export default App;
