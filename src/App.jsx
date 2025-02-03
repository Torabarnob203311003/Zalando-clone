import Banner from './components/banner';
import Dropmenu from './components/dropmenu';
import Header from './components/header';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Products from './components/products';

import StoryCard from './components/storycard'
import PromotionalBanner from './components/PromotionalBanner';

import ProductSection from './components/ProductSection';
import { products, workoutShoeProducts, stories, stories2, adidasShoeProducts, cosmeticProducts, tshirtProducts } from './contents/contentconfigs';
import Heroagain from './components/heroagain';
import ShoeCard from './components/ShoeCard.';

import Footer from './components/Contact';
import Footer2 from './components/last';





function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      <Header />
      <Navbar />
      <Dropmenu />
      <Banner />
      <Hero
        title="Feel the warmth"
        subtitle="Cosy winter loungewear"
        linkText="Shop now"
        images={[
          { src: "model-huddie.jpg", alt: "Model in hoodie" },
          { src: "model-huddie-2.jpg", alt: "Model sitting" },
        ]}
      />
      <Products products={products} color='bg-amber-400' imgstyle={"w-72 h-fit object-cover rounded-lg"} />
      <StoryCard stories={stories} lines="feel the Vibe" />
      <PromotionalBanner />

      <Products products={workoutShoeProducts} color='bg-amber-200' imgstyle={"w-72 h-fit object-cover rounded-lg"} />
      <ProductSection />
      <StoryCard stories={stories2} lines="feel the Trouser" />
      <Heroagain />

      <ShoeCard />
      <Products products={adidasShoeProducts} color='bg-gray-600' imgstyle={"w-72 h-fit object-cover rounded-lg"} />

      <Hero
        title="Server  Face"
        subtitle="...and Steal hearts"
        linkText="Shop now"
        bgColor="bg-rose-200"
        imageWidth="w-62"
        textColor="text-gray-900"
        images={[
          { src: "https://img01.ztat.net/banner/de55b9bcb2e748938ae136a2e000c8e7/f965d1a218944cff8e2eac41340dac3f.jpg?imwidth=693", alt: "Model in hoodie" },

        ]}
      />



      <Products products={cosmeticProducts} color='bg-rose-100' imgstyle={"w-72 h-fit object-cover rounded-lg"} />
      <Hero
        title="A gentel Start"
        subtitle="Plush and Cuddly pieces"
        linkText="Shop now"
        imageWidth="w-62"
        images={[


          { src: "https://img01.ztat.net/banner/26b553bc04404ea7889fc6f72a5ce962/a6e0c9a8f39743ad89d7323d90804f25.jpg?imwidth=693", alt: "Model sitting" },
        ]}
      />


      <Products products={tshirtProducts} color='bg-white' imgstyle={"w-72 h-fit object-cover rounded-lg"} />
      <Footer />
      <Footer2 />



    </div>
  );
}

export default App;
