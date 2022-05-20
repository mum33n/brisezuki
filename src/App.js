import logo from './logo.svg';
import './styles/output.css';
import Test from './components/test';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Info from './components/Info';
import Roadmap from './components/Roadmap';
import '../node_modules/@fortawesome/fontawesome/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Tokenomics from './components/Tokenomics';
import NftSection from './components/NftSection';
import Footer from './components/Footer';
import 'wow.js'
config.autoAddCss = false




function App() {
  return (
    <div className="bg-darkBlue w-full text-white">
      <div className='bg-darkBlue'>
        <Navbar/>
        <Banner/>
      </div>
      <Info/>
      <Roadmap/>
      <Tokenomics/>
      <NftSection/>
      <Footer/>
    </div>
  );
}

export default App;
