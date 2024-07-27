
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './HEADERS/Header';
import BottomNavBar from './FOOTERS/BottomNavBar';
import Home from './Home';
import Hline from './GENERAL_COMPONENTS/lines';


const HomeComponents = () => <Home />;
const CoursesComponents = () => <Home />;
const CoachesComponents = () => <Home />;
const CommunityComponents = () => <Home />;
const AuthComponents = () => <Home />;
const DashboardComponents = () => <Home />;


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hline color={'purple'} />
      <Routes>
        <Route path="/" exact element={HomeComponents()} />
        <Route path="/courses" exact element={CoursesComponents()} />
        <Route path="/coaches" element={CoachesComponents()} />
        <Route path="/community" element={CommunityComponents()} />
        <Route path="/auth" element={AuthComponents()} />
        <Route path="/auth/dashboard" element={DashboardComponents()} />
      </Routes>
      <BottomNavBar />

    </BrowserRouter>
  );
}

export default App;
