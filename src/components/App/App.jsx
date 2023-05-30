import { Routes, Route } from 'react-router-dom';

import Main from '../Main/Main';
import AboutMe from 'components/AboutMe/AboutMe';
import Profile from '../Profile/Profile';
import PageNotFound from 'components/PageNotFound/PageNotFound';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
