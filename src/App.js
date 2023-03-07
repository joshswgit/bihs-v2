import IndexPage from './pages/IndexPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import VideoPage from './pages/VideoPage';
import StatementPage from './pages/StatementPage';
import './pages/indexPage.css';

 
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={  <IndexPage /> } />  
          <Route path='/index' element={<VideoPage />} /> 
          <Route path='/statement' element={<StatementPage />} /> 
        </Routes>
    </BrowserRouter>
  );
}

export default App;
