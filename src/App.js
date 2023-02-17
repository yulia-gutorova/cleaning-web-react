import './App.css';
import NavigationMenu from './components/NavigationMenu';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <NavigationMenu></NavigationMenu>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>

  );
}

export default App;
