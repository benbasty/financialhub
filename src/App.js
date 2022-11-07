import './App.css';
import Header from './Header';
import Solutions from './Solutions';
import Cases from './Cases';
import Blog from './Blog';
import About from './About';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';
// import BlogPage from './BlogPage';
// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Solutions />
      <Cases />
      <Blog />
      <Team />
      <Contact />
      <Footer />

      {/* <Routes>
          <Route path="/blogpage" element={<BlogPage />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
