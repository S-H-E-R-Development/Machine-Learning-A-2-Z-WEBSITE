
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './HEADERS/Header';
import BottomNavBar from './FOOTERS/BottomNavBar';

import Hline from './GENERAL_COMPONENTS/lines';

import MLA2ZCourseOutLine from './MLA2ZCOURSE/MLA2ZCourseOutLine';
import ESP32CourseOutLine from './ESP32COURSE/ESP32CourseOutLine';
import MLA2ZModule0 from './MLA2ZCOURSE/MODULES/MODULE0/Module0';

// imports of module 0 : Machine learning  A TO Z

import MLA2ZModule_0_Topic_1_Stage_0_Content from './MLA2ZCOURSE/MODULES/MODULE0/TOPIC_1/Stage_0';

// imports of module 1
import MLA2ZModule1 from './MLA2ZCOURSE/MODULES/MODULE1/Module1';
import MLA2ZModule_1_Topic_1_Stage_0_Content from './MLA2ZCOURSE/MODULES/MODULE1/TOPIC_1/Stage_0';
import MLA2ZModule_1_Topic_1_Stage_1_Content from './MLA2ZCOURSE/MODULES/MODULE1/TOPIC_1/Stage_1';
import MLA2ZModule_1_Topic_1_Stage_2_Content from './MLA2ZCOURSE/MODULES/MODULE1/TOPIC_1/Stage_2';

const HomeComponents = () => <MLA2ZCourseOutLine />;
const CoursesComponents = () => <MLA2ZCourseOutLine />;
const CoachesComponents = () => <MLA2ZCourseOutLine />;
const ESP32Components = () => <ESP32CourseOutLine />;
const CommunityComponents = () => <MLA2ZCourseOutLine />;
const AuthComponents = () => <MLA2ZCourseOutLine />;
const DashboardComponents = () => <MLA2ZCourseOutLine />;



// module 0
const MLA2Z_MODULE0 = () => <MLA2ZModule0 />
// topic 1
const MLA2ZModule_0_Topic_1_Stage_0 = () => <MLA2ZModule_0_Topic_1_Stage_0_Content />;
const MLA2ZModule_0_Topic_1_Stage_1 = () => <MLA2ZModule_0_Topic_1_Stage_0_Content />;
const MLA2ZModule_0_Topic_1_Stage_2 = () => <MLA2ZModule_0_Topic_1_Stage_0_Content />;
const MLA2ZModule_0_Topic_1_Stage_3 = () => <MLA2ZModule_0_Topic_1_Stage_0_Content />;

// topic 2
const MLA2ZModule_0_Topic_2_Stage_0 = () => <MLA2ZModule_0_Topic_1_Stage_0_Content />;
const MLA2ZModule_0_Topic_2_Stage_1 = () => <MLA2ZModule_0_Topic_1_Stage_0_Content />;
const MLA2ZModule_0_Topic_2_Stage_2 = () => <MLA2ZModule_0_Topic_1_Stage_0_Content />;
const MLA2ZModule_0_Topic_2_Stage_3 = () => <MLA2ZModule_0_Topic_1_Stage_0_Content />;

// module 1
const MLA2Z_MODULE1 = () => <MLA2ZModule1 />
// topic 1
const MLA2ZModule_1_Topic_1_Stage_0 = () => <MLA2ZModule_1_Topic_1_Stage_0_Content />
const MLA2ZModule_1_Topic_1_Stage_1 = () => <MLA2ZModule_1_Topic_1_Stage_1_Content />
const MLA2ZModule_1_Topic_1_Stage_2 = () => <MLA2ZModule_1_Topic_1_Stage_2_Content />

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
        <Route path="/auth" exact element={AuthComponents()} />
        <Route path="/auth/dashboard" exact element={DashboardComponents()} />
        {/* Machine Learning A-2-Z Course Routers */}


        {/* about module 0 */}
        <Route path="/MLA2ZCourse/Modules/Module0/" exact element={MLA2Z_MODULE0()} />
        {/* topic 1 */}
        <Route path="/MLA2ZCourse/Modules/Module0/" exact element={MLA2ZModule_0_Topic_1_Stage_0()} />
        <Route path="/MLA2ZCourse/Modules/Module0/Topic1/Stage0/" exact element={MLA2ZModule_0_Topic_1_Stage_0()} />
        <Route path="/MLA2ZCourse/Modules/Module0/Topic1/Stage1/" exact element={MLA2ZModule_0_Topic_1_Stage_1()} />
        <Route path="/MLA2ZCourse/Modules/Module0/Topic1/Stage2/" element={MLA2ZModule_0_Topic_1_Stage_2()} />
        <Route path="/MLA2ZCourse/Modules/Module0/Topic1/Stage3/" element={MLA2ZModule_0_Topic_1_Stage_3()} />
        {/* topic 2 */}
        <Route path="/MLA2ZCourse/Modules/Module0/" exact element={MLA2ZModule_0_Topic_2_Stage_0()} />
        <Route path="/MLA2ZCourse/Modules/Module0/Topic2/Stage0/" exact element={MLA2ZModule_0_Topic_2_Stage_0()} />
        <Route path="/MLA2ZCourse/Modules/Module0/Topic2/Stage1/" exact element={MLA2ZModule_0_Topic_2_Stage_1()} />
        <Route path="/MLA2ZCourse/Modules/Module0/Topic2/Stage2/" element={MLA2ZModule_0_Topic_2_Stage_2()} />
        <Route path="/MLA2ZCourse/Modules/Module0/Topic2/Stage3/" element={MLA2ZModule_0_Topic_2_Stage_3()} />

        {/* module 1 */}
        <Route path="/MLA2ZCourse/Modules/Module1/" exact element={MLA2Z_MODULE1()} />
        {/* topic 1 */}
        <Route path="/MLA2ZCourse/Modules/Module1/Topic1/Stage0" exact element={MLA2ZModule_1_Topic_1_Stage_0()} />
        <Route path="/MLA2ZCourse/Modules/Module1/Topic1/Stage1" exact element={MLA2ZModule_1_Topic_1_Stage_1()} />
        <Route path="/MLA2ZCourse/Modules/Module1/Topic1/Stage2" exact element={MLA2ZModule_1_Topic_1_Stage_2()} />
      </Routes>
      <BottomNavBar />

    </BrowserRouter>
  );
}

export default App;
