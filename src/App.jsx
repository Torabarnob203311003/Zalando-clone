import Banner from './components/banner';
import Dropmenu from './components/dropmenu';
import Header from './components/header';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Products from './components/products';
import logo from './logo.svg';
import StoryCard from './components/storycard'
import PromotionalBanner from './components/PromotionalBanner';

import ProductSection from './components/ProductSection';
import { products, workoutShoeProducts, stories, stories2, adidasShoeProducts, cosmeticProducts, tshirtProducts } from './contents/contentconfigs';
import Heroagain from './components/heroagain';
import ShoeCard from './components/ShoeCard.';
import Hero3 from './components/Hero3';
import Footer from './components/Contact';
import Footer2 from './components/last';
import Hero4 from './components/Hero4';




function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      <Header />
      <Navbar />
      <Dropmenu />
      <Banner />
      <Hero />
      <Products products={products} color='bg-amber-400' imgstyle={"w-72 h-fit object-cover rounded-lg"} />
      <StoryCard stories={stories} lines="feel the Vibe" />
      <PromotionalBanner />

      <Products products={workoutShoeProducts} color='bg-amber-200' imgstyle={"w-72 h-fit object-cover rounded-lg"} />
      <ProductSection />
      <StoryCard stories={stories2} lines="feel the Trouser" />
      <Heroagain />
      <ShoeCard />
      <Products products={adidasShoeProducts} color='bg-gray-600' imgstyle={"w-72 h-fit object-cover rounded-lg"} />

      <Hero3 />
      <Products products={cosmeticProducts} color='bg-rose-100' imgstyle={"w-72 h-fit object-cover rounded-lg"} />
     
      <Hero4 />

      <Products products={tshirtProducts} color='bg-white' imgstyle={"w-72 h-fit object-cover rounded-lg"} />
     <Footer/>
      <Footer2/>



    </div>
  );
}

export default App;
