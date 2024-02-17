import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Browse from "./components/browse";
import Arrived from "./components/arrived";
import Clients from "./components/clients";
import AsideMenu from "./components/asidemenu";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
