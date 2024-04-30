import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CreateNote from "./pages/CreateNote.jsx";
import NotesList from "./pages/NotesList.jsx";
import NoteDetail from "./pages/NoteDetail.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/notes" element={<NotesList />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
      </Routes>
    </Router>
  );
}

export default App;