import {BrowserRouter, Route, Routes} from 'react-router';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from "./components/pages/NotFound";
import Header from "./components/shared/Header";
import './App.scss';
import IndividualMovie from "./components/pages/IndividualMovie";
import History from "./components/pages/History";
import Movements from "./components/pages/Movements";
import Admin from "./components/pages/Admin";
import CreateOrEdit from "./components/pages/CreateOrEdit";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header/>
      </header>

      <main className="p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/individual" element={<IndividualMovie />} />
          <Route path="/movements" element={<Movements />} />
           <Route path="/admin" element={<Admin />} />
            <Route path="/editMovie" element={<CreateOrEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
