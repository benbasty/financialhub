import './App.css';
import Header from './Header';
import Footer from './Footer';
import BlogPage from './BlogPage';
import { Route, Routes } from 'react-router-dom';
import PageContent from './PageContent';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/financialhub" element={<PageContent />}></Route>
          <Route path="/financialhub/blogpage" element={<BlogPage />}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
