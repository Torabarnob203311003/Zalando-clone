import Banner from './components/banner';
import Dropmenu from './components/dropmenu';
import Header from './components/header';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Products from './components/products';
import logo from './logo.svg';
import StoryCard from './components/storycard'
import PromotionalBanner from './components/PromotionalBanner';

function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      <Header/>
       <Navbar/>
      <Dropmenu/>
      <Banner/>
      <Hero/>
      <Products/>
      <StoryCard />  
      <PromotionalBanner/>    

  
     
      </div>
  );
}

export default App;
