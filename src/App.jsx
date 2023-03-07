import { Route, Routes } from "react-router-dom";

// COMPONENTS
import Resources from "./components/Resources";
import SingleResource from "./components/SingleResource";
import NotFound from "./components/404";

function App() {
  return (
    <div className="flex items-center justify-center mt-2 ">
      <Routes>
        <Route path="/" element={<Resources />} />
        <Route path="/:resource" element={<SingleResource />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
