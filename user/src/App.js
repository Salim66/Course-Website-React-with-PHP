import Analysis from "./components/Analysis/Analysis";
import Services from "./components/Services/Services";
import Summary from "./components/Summary/Summary";
import TopBanner from "./components/TopBanner/TopBanner";
import TopNavigation from "./components/TopNavigation/TopNavigation";


function App() {
  return (
    <>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
    </>
  );
}

export default App;
