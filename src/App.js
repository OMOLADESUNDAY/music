
import {React} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import About from './components/About';
import LastesAlbum from './components/LastesAlbum';
import Video from './components/Video';
// import Subscription from './components/Subscription';
import Concert from './components/Concert'
import Footer from './components/Footer';
function App() {

  return (
    <div className='appContainer'>
      <Navbar/>
      <Hero/>
      <About/>
      <LastesAlbum/>
      <Video/>
      <Concert/>
      <Footer/>
      {/* <Subscription/> */}
    </div>
    
  );
}

export default App;
