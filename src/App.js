import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Advantage from './components/Advantage/Advantage';
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar/Navbar';
import Testimonials from './components/Testimonials/Testimonials';
import { getFaq } from './redux/actions/faq';
import { getSlider } from './redux/actions/slider';
import CircularProgress from '@material-ui/core/CircularProgress';


function App() {

  const store = useSelector(state => state)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSlider())
    dispatch(getFaq())
  }, [])

  return (
    <div className="App">
      {
        (store.header.length && store.faq.length) ?
          <>
            <Navbar />
            <Advantage />
            <Testimonials />
            <Faq />
            <Contact />
            <Footer />
          </>
          : <div className='loading'><CircularProgress size={100} disableShrink /></div>}
    </div>
  );
}

export default App;

