import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import FireDetection from './pages/FireDetection';
import UploadImages from './pages/UploadImages';
import ViewHistory from './pages/ViewHistory';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/firedetection' element={<FireDetection />} />
          <Route path='/uploadimages' element={<UploadImages />} />
          <Route path='/viewhistory' element={<ViewHistory />} />
        </Route>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
