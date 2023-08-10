import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './screens/AllProducts';
import { Helmet } from "react-helmet";
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import Projects from './screens/Projects';


function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>i-homes</title>
        <meta
          name="description"
          content="i-homes Luxary Apartments"
        />
        <meta
          name="keywords"
          content="i-homes Luxary Apartments"
        />
      </Helmet>
      <Routes>
        <Route path='/' element={<AllProducts />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/our-projects' element={<Projects />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
