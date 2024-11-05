
import {React} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import About from './components/About';
import LastesAlbum from './components/LastesAlbum';
// import Subscription from './components/Subscription';

function App() {

  return (
    <div className='appContainer'>
      <Navbar/>
      <Hero/>
      <About/>
      <LastesAlbum/>
      {/* <Subscription/> */}
    </div>
    
  );
}

export default App;
