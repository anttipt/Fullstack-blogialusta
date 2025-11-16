import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewArticle from './pages/NewArticle';
import ViewArticle from './pages/ViewArticle';
import EditArticle from './pages/EditArticle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewArticle />} />
        <Route path="/article/:id" element={<ViewArticle />} />
        <Route path="/edit/:id" element={<EditArticle />} />
      </Routes>
    </Router>
  );
}

export default App;
