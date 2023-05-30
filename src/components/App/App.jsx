import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import AboutMe from 'components/AboutMe/AboutMe';
import Profile from '../Profile/Profile';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
