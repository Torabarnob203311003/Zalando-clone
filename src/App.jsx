import Dropmenu from './components/dropmenu';
import Header from './components/header';
import Navbar from './components/navbar';
import logo from './logo.svg';

function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      <Header/>
       <Navbar/>
      <Dropmenu/>
     
      </div>
  );
}

export default App;
