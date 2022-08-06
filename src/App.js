
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import MyProfile from './pages/MyProfile'
import Layout from './components/Layout'




function App() {
  return (
    <BrowserRouter> 
    <Layout >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:feature" element={<Products />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
