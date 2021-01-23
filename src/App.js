import './App.css';
import Home from './Home';
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    // BEM
    <div className="app">
      {/* Home */}
      {/* Header */}
      <Header />
      {/* Banner */}
      {/* Cards */}
      <Home />
      {/* footer */}
      <Footer />

      {/* Search page */}
    </div>
  );
}

export default App;
