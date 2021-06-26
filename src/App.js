import './App.css';
import Advantage from './components/Advantage/Advantage';
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Testimonials from './components/Testimonials/Testimonials';


function App() {

  return (
    <div className="App">
      <Header />
      <Advantage />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

