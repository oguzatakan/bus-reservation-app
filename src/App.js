import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TicketScreen from "./pages/TicketScreen/TicketScreen";
import TravelPanel from "./pages/TravelPanel/TravelPanel";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ticket" element={<TicketScreen />}>
          <Route path=":travel" element={<TicketScreen />} />
        </Route>
        <Route path="/travelPanel" element={<TravelPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
