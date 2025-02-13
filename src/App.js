import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Hero from "./components/hero";
import Songs from "./components/songs";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Songs />
      <Footer />
    </div>
  );
}

export default App;