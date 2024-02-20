import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Browse from "./components/browse";
import Arrived from "./components/arrived";
import Clients from "./components/clients";
import AsideMenu from "./components/asidemenu";
import Footer from "./components/footer";

function App() {
  const [items, setItems] = React.useState([]);
  React.useEffect(function () {
    (async function () {
      const response = await fetch("https://bwacharity.fly.dev/items");
      const { nodes } = await response.json();
      setItems(nodes);
    })();
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Clients />
      <AsideMenu />
      <Footer />
    </>
  );
}

export default App;
