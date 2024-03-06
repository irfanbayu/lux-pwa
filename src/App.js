import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Browse from "./components/browse";
import Arrived from "./components/arrived";
import Clients from "./components/clients";
import AsideMenu from "./components/asidemenu";
import Footer from "./components/footer";
import Offline from "./components/offline";

function App() {
  const [items, setItems] = React.useState([]);
  const [offlineStatus, setOfflineStatus] = React.useState(!navigator.onLine);

  function handleOfflineStatus() {
    setOfflineStatus(!navigator.onLine);
  }

  React.useEffect(
    function () {
      (async function () {
        const response = await fetch("https://bwacharity.fly.dev/items", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
        const { nodes } = await response.json();
        setItems(nodes);

        if (!document.querySelector('script[src="/carousel.js"]')) {
          const script = document.createElement("script");
          script.src = "/carousel.js";
          script.async = false;
          document.body.appendChild(script);
        }
        // const script = document.createElement("script");
        // script.src = "/carousel.js";
        // script.async = false;
        // document.body.appendChild(script);
      })();

      handleOfflineStatus();
      window.addEventListener("online", handleOfflineStatus);
      window.addEventListener("offline", handleOfflineStatus);

      return function () {
        window.addEventListener("online", handleOfflineStatus);
        window.addEventListener("offline", handleOfflineStatus);
      };
    },
    [offlineStatus]
  );
  return (
    <>
      {offlineStatus && <Offline />}
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
