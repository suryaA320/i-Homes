import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './screens/AllProducts';
import { Helmet } from "react-helmet";
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import Projects from './screens/Projects';
import Chat from './components/Chat';


function App() {
  // let mybutton = document.getElementById("myBtn");
  //   window.onscroll = function () { scrollFunction() };

  //   function scrollFunction() {
  //       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //           mybutton.style.display = "block";
  //       } else {
  //           mybutton.style.display = "none";
  //       }
  //   }
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
      <Chat />
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
