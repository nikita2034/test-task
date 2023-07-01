
import './App.css';
import { Routes, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage';
import PostsPage from './Pages/PostsPage/PostsPage'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/posts' element={<PostsPage />} />
      </Routes>
    </div>
  );
}

export default App;
