import './App.css';
import Header from './Header';
// import Solutions from './Solutions';
// import Cases from './Cases';
// import Blog from './Blog';
// import About from './About';
// import Team from './Team';
// import Contact from './Contact';
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
