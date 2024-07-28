
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './HEADERS/Header';
import BottomNavBar from './FOOTERS/BottomNavBar';

import Hline from './GENERAL_COMPONENTS/lines';

import MLA2ZCourseOutLine from './MLA2ZCOURSE/MLA2ZCourseOutLine';
import ESP32CourseOutLine from './ESP32COURSE/ESP32CourseOutLine';



const HomeComponents = () => <MLA2ZCourseOutLine />;
const CoursesComponents = () => <MLA2ZCourseOutLine />;
const CoachesComponents = () => <MLA2ZCourseOutLine />;
const ESP32Components = () => <ESP32CourseOutLine />;
const CommunityComponents = () => <MLA2ZCourseOutLine />;
const AuthComponents = () => <MLA2ZCourseOutLine />;
const DashboardComponents = () => <MLA2ZCourseOutLine />;


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hline color={'purple'} />
      <Routes>
        <Route path="/" exact element={HomeComponents()} />
        <Route path="/courses" exact element={CoursesComponents()} />
        <Route path="/ESP32" exact element={ESP32Components()} />
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
