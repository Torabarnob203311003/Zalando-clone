import Banner from './components/banner';
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
      <Banner/>

      <h1 className='  text-4xl' > see  you next day</h1> 
     
      </div>
  );
}

export default App;
