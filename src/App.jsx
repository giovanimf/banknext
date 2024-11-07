import './App.css'
import Navbar from './components/Navbar/'
import Header from './components/Header';
import Services from './components/Services';
import Investimentos from './components/Investimentos';
import Statistics from './components/Statistics';
import Pix from './components/Pix';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Selos from './components/Selos';

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Services/>
      <Investimentos/>
      <Statistics/>
      <Pix/>
      <Selos/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
