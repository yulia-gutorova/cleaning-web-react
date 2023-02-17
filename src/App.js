import NavigationMenu from './components/NavigationMenu';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import ServiceSection from './components/ServiceSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationMenu></NavigationMenu>
      <MainSection></MainSection>
      <ServiceSection></ServiceSection>
      <Footer></Footer>
    </div>

  );
}

export default App;
